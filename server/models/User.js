const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  nombre: String,
  apellidos: String,
  email: String,
  telefono: Number,
  perfil_de_linkedin: String,
  profesion: {
    type: String,
    enum: ["Abogado", "Antropólogo", "Educador Social", "Integrador Social", "Logopeda", "Maestro", "Monitor de Tiempo Libre", "Terapeuta Ocupacional", "Trabajador Social", ]
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