const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    nombre: String,
    busca: {
        type: String,
        enum: ["Ideas", "Candidatos"]
    },
    perfil_de_linkedin: String,
    persona_de_contacto: {
        type: String
    },
    telefono: Number,
    email: { type: String, required: true },
    image: String,

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Company = mongoose.model('Company', userSchema);
module.exports = Company;