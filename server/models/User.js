const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    enum: ["Profesional", "Empresa"]
  },
  nombre: String,
  apellidos: String,
  email: { type: String, required: true },
  telefono: Number,
  perfil_de_linkedin: String,
  persona_de_contacto: {
    type: String
  },
  profesion: {
    type: String,
    enum: ["Abogado/a", "Antropólogo/a", "Educador/a Social", "Integrador/a Social", "Logopeda", "Maestra", "Monitor/a de Tiempo Libre", "Psicologo/a", "Sociologo/a", "Terapeuta Ocupacional", "Trabajador/a Social", ]
  },
  cv_resumido: String,
  image: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;