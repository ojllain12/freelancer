const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es requerido'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un email válido']
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje es requerido'],
    trim: true
  },
  leido: {
    type: Boolean,
    default: false
  },
  fechaContacto: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Índice para búsquedas por email
contactoSchema.index({ email: 1 });
contactoSchema.index({ fechaContacto: -1 });

module.exports = mongoose.model('Contacto', contactoSchema);
