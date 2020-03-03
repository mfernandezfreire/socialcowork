const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    nombre: String,
    busca: {
        type: String
    },
    enum: ["Ideas", "Candidatos"],
    perfil_de_linkedin: String,
    persona_de_contacto: {
        type: String
    },
    telefono: Number,
    image: String,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const User = mongoose.model('Project', userSchema);
module.exports = Company;