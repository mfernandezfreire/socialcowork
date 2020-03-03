require('dotenv').config();
const mongoose = require('mongoose')
const User = require('../models/User')
const Project = require('../models/Project')
const bcrypt = require("bcrypt")
const bcryptSalt = 10;


// PROYECTO 1

// Id ADMINISTRADORES - PROYECTO 1
const num1 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - PROYECTO 1
const num2 = new mongoose.mongo.ObjectId();
const num3 = new mongoose.mongo.ObjectId();
const num4  = new mongoose.mongo.ObjectId();

// PROYECTO 2

// Id ADMINISTRADORES - PROYECTO 2
const num5 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - PROYECTO 2
const num6 = new mongoose.mongo.ObjectId();
const num7 = new mongoose.mongo.ObjectId();
const num8  = new mongoose.mongo.ObjectId();

// PROYECTO 3

// Id ADMINISTRADORES - PROYECTO 3
const num9 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - PROYECTO 3
const num10 = new mongoose.mongo.ObjectId();
const num11 = new mongoose.mongo.ObjectId();
const num12  = new mongoose.mongo.ObjectId();

// PROYECTO 4

// Id ADMINISTRADORES - PROYECTO 4
const num13 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - PROYECTO 4
const num14 = new mongoose.mongo.ObjectId();
const num15 = new mongoose.mongo.ObjectId();
const num16  = new mongoose.mongo.ObjectId();


// SEED A PARTIR DE AQUÍ

const nombres = ["Filogonia", "Digna Marciana", "Clodoveo", "Licerio", "Vistila", "Firmo", "Filadelfo", "Ninfodora", "Canuto", "Baraquisio", "Austiquiliano", "Virisima"]
const apellidos = ["Perez", "Sanchez", "Fernandez", "Lopez", "Saez", "Rey", "Alvarez"]
const type = ["Economic Maecenas", "Technical Maecenas", "Tourist Maecenas"]

// Nombres Random

const numNombre = Math.floor(Math.random() * 11 + 1);
const numApellidos = Math.floor(Math.random() * 6 + 1);
const numNombre1 = Math.floor(Math.random() * 11 + 1);
const numApellidos1 = Math.floor(Math.random() * 6 + 1);
const numNombre2 = Math.floor(Math.random() * 11 + 1);
const numApellidos2 = Math.floor(Math.random() * 6 + 1);
const numNombre3 = Math.floor(Math.random() * 11 + 1);
const numApellidos3 = Math.floor(Math.random() * 6 + 1);
const numNombre4 = Math.floor(Math.random() * 11 + 1);
const numApellidos4 = Math.floor(Math.random() * 6 + 1);
const numNombre5 = Math.floor(Math.random() * 11 + 1);
const numApellidos5 = Math.floor(Math.random() * 6 + 1);
const numNombre6 = Math.floor(Math.random() * 11 + 1);
const numApellidos6 = Math.floor(Math.random() * 6 + 1);

const numType = Math.floor(Math.random() * 3 + 1)


// Projects AQUI

const userSchema = new Schema({
    nombre: String,
    fase: {
        type: String,
        enum: ["Elaboración del diseño", "Busqueda de Recursos", "Fases Iniciales del proyecto"]
    },
    colectivo: {
        type: String
    },
    enum: ["Violencia de Genero", "Diversidad Funcional",
        "En Riesgo de Exclusión Social", "Mayores", "Menores", "Población Inmigrante", "Otros"
    ],
    descripcion_del_proyecto: String,
    profesionales_necesarios: [{
        type: String
    }],
    lugar_de_ejecucion: {
        type: String
    },
    id_administrador: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }],
    id_colaboradores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }],
    image: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Projects = {
    nombre:
    fase:
    colectivo:
    enum:
    descripcion_del_proyecto:
    profesionales_necesarios:
    lugar_de_ejecucion:
    id_administrador:
    id_
}

// Users AQUI

// Admin AQUI

// Colaborators AQUI

// Companies AQUI

// Colaborator without Projects


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    User.deleteMany()
      .then(() => {
        return User.create(dataAdmin);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  })
  .then(x => {
    Project.deleteMany()
      .then(() => {
        return Project.create(project);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
  .then(x => {
    Company.deleteMany()
      .then(() => {
        return Project.create(project);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });