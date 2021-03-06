const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: { type: String, required: true },
    fase: {
        type: String,
        enum: ["Elaboración del diseño", "Busqueda de Recursos", "Fases Iniciales del proyecto"],
        required: true
    },
    colectivo: {
        type: String,
        enum: ["Violencia de Genero", "Diversidad Funcional",
            "En Riesgo de Exclusión Social", "Mayores", "Menores", "Población Inmigrante", "Otros"
        ],
        required: true
    },
    descripcion_del_proyecto: { type: String, required: true },
    profesionales_necesarios: {
        type: String
    },
    lugar_de_ejecucion: {
        type: String
    },
    id_administrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    id_colaboradores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    lat: {
        type: Number
    },
    lon: { 
        type: Number
    },
    id_empresas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }],
    image: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Project = mongoose.model('Project', userSchema);
module.exports = Project;