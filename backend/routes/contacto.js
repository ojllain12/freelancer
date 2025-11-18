const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');
const nodemailer = require('nodemailer');

// POST - Crear nuevo contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, telefono, email, mensaje } = req.body;

    // Validar campos
    if (!nombre || !telefono || !email || !mensaje) {
      return res.status(400).json({ 
        error: 'Todos los campos son obligatorios' 
      });
    }

    // Crear contacto en la base de datos
    const nuevoContacto = new Contacto({
      nombre,
      telefono,
      email,
      mensaje
    });

    const contactoGuardado = await nuevoContacto.save();
    console.log('💾 Contacto guardado en MongoDB:', contactoGuardado._id);

    // Enviar email de notificación
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `Nuevo contacto de ${nombre}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0097A7;">✉️ Nuevo mensaje de contacto</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono}</p>
                <p style="margin: 20px 0;"><strong>Mensaje:</strong></p>
                <div style="background-color: white; padding: 15px; border-left: 4px solid #FFC107; border-radius: 4px;">
                  ${mensaje}
                </div>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 12px; text-align: center;">
                  📅 Recibido el: ${new Date().toLocaleString('es-MX', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}
                </p>
              </div>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email enviado correctamente a:', process.env.EMAIL_USER);
      }
    } catch (emailError) {
      console.error('❌ Error al enviar email:', emailError.message);
      // No bloqueamos la respuesta si falla el email
    }

    res.status(201).json({ 
      success: true,
      message: 'Mensaje enviado exitosamente. Te contactaremos pronto.',
      contacto: {
        id: nuevoContacto._id,
        nombre: nuevoContacto.nombre,
        email: nuevoContacto.email
      }
    });

  } catch (error) {
    console.error('Error al guardar contacto:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Datos inválidos',
        detalles: error.message 
      });
    }

    res.status(500).json({ 
      error: 'Error al procesar tu mensaje. Por favor intenta nuevamente.' 
    });
  }
});

// GET - Obtener todos los contactos (para panel admin)
router.get('/', async (req, res) => {
  try {
    const contactos = await Contacto.find()
      .sort({ fechaContacto: -1 })
      .select('-__v');

    res.json({
      total: contactos.length,
      contactos
    });
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    res.status(500).json({ error: 'Error al obtener contactos' });
  }
});

// GET - Obtener contacto por ID
router.get('/:id', async (req, res) => {
  try {
    const contacto = await Contacto.findById(req.params.id);
    
    if (!contacto) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }

    res.json(contacto);
  } catch (error) {
    console.error('Error al obtener contacto:', error);
    res.status(500).json({ error: 'Error al obtener contacto' });
  }
});

// PUT - Marcar contacto como leído
router.put('/:id/leido', async (req, res) => {
  try {
    const contacto = await Contacto.findByIdAndUpdate(
      req.params.id,
      { leido: true },
      { new: true }
    );

    if (!contacto) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }

    res.json({ 
      success: true,
      message: 'Contacto marcado como leído',
      contacto 
    });
  } catch (error) {
    console.error('Error al actualizar contacto:', error);
    res.status(500).json({ error: 'Error al actualizar contacto' });
  }
});

// DELETE - Eliminar contacto
router.delete('/:id', async (req, res) => {
  try {
    const contacto = await Contacto.findByIdAndDelete(req.params.id);

    if (!contacto) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }

    res.json({ 
      success: true,
      message: 'Contacto eliminado exitosamente' 
    });
  } catch (error) {
    console.error('Error al eliminar contacto:', error);
    res.status(500).json({ error: 'Error al eliminar contacto' });
  }
});

module.exports = router;
