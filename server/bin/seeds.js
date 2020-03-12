require('dotenv').config();
const mongoose = require('mongoose')
const User = require('../models/User')
const Project = require('../models/Project')
const Company = require('../models/Company')
const bcrypt = require("bcrypt")
const bcryptSalt = 10;


// PROYECTO 1

// Id ADMINISTRADORES - PROYECTO 1
const num1 = new mongoose.mongo.ObjectId();

// Id Colaboradores - PROYECTO 1
const num2 = new mongoose.mongo.ObjectId();
const num3 = new mongoose.mongo.ObjectId();
const num4 = new mongoose.mongo.ObjectId();

// Id EMPRESA - PROYECTO 1
const num5 = new mongoose.mongo.ObjectId();

// PROYECTO 2

// Id ADMINISTRADOR - PROYECTO 2
const num6 = new mongoose.mongo.ObjectId();

// Id  COLABORADOR - PROYECTO 2
const num7 = new mongoose.mongo.ObjectId();
const num8 = new mongoose.mongo.ObjectId();
const num9 = new mongoose.mongo.ObjectId()

// Id EMPRESA - PROYECTO 2
const num10 = new mongoose.mongo.ObjectId();

// PROYECTO 3

// Id ADMINISTRADORES - PROYECTO 3
const num12 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - PROYECTO 3
const num11 = new mongoose.mongo.ObjectId();
const num13 = new mongoose.mongo.ObjectId();
const num14 = new mongoose.mongo.ObjectId();

// Id EMPRESAS - PROYECTO 3
const num15 = new mongoose.mongo.ObjectId();
const num16 = new mongoose.mongo.ObjectId();
const num17 = new mongoose.mongo.ObjectId();
const num18 = new mongoose.mongo.ObjectId();
const num19 = new mongoose.mongo.ObjectId();

// Id COLABORADORES - VARIOS
const num20 = new mongoose.mongo.ObjectId();
const num21 = new mongoose.mongo.ObjectId();
const num22 = new mongoose.mongo.ObjectId();
const num23 = new mongoose.mongo.ObjectId();
const num24 = new mongoose.mongo.ObjectId();

// Id EMPRESAS VARIOS

const num26 = new mongoose.mongo.ObjectId();
const num27 = new mongoose.mongo.ObjectId();
const num28 = new mongoose.mongo.ObjectId();
const num29 = new mongoose.mongo.ObjectId();
const num30 = new mongoose.mongo.ObjectId();
const num31 = new mongoose.mongo.ObjectId();

// Id EMPRESAS - VARIOS

// SEED A PARTIR DE AQUÍ

// Modelos SEED  

// const Projects = {
//     _id: num1
//     nombre:
//     fase: "Elaboración del diseño", "Busqueda de Recursos", "Fases Iniciales del proyecto"
//     colectivo: "Violencia de Genero", "Diversidad Funcional","En Riesgo de Exclusión Social", "Mayores", "Menores", "Población Inmigrante", "Otros"
//     enum:
//     descripcion_del_proyecto:
//     profesionales_necesarios:
//     lugar_de_ejecucion:
//     id_administrador: []
//     id_colaboradores
//     image:
// }

// User = {
//   username:
//   password:
//   nombre:
//   apellidos:
//   email:
//   telefono:
//   perfil_de_linkedin:
//   profesion: "Abogado/a", "Antropólogo/a", "Educador/a Social", "Integrador/a Social", "Logopeda", "Maestro/a", "Monitor/a de Tiempo Libre", "Terapeuta Ocupacional", "Trabajador/a Social", 
//   cv_resumido:
//   image:
// }

// Company = {
//   username: 
//   nombre: 
//   busca: "Ideas", "Candidatos"
//   perfil_de_linkedin: 
//   persona_de_contacto: 
//   telefono:
//   image: 
// }


// ELEMENTO QUE PUEBLAN LA BBDD

const project = [

  // PROYECTO 1 AQUI

  {
    nombre: "Refuerzo de autoestima en mujeres que han sufrido violencia de género",
    fase: "Elaboración del diseño",
    colectivo: "Violencia de Genero",
    descripcion_del_proyecto: "El principal escollo al que se enfrentan las victimas de violencia de genero despues de denunciar el maltrato es incorporarse a una rutina diaria. El Objetivo principal del proyecto es regenerar la habilidades sociales básicas a traves de ayuda psicologica y social. El proyecto tambien contara con asesoramiento legal ",
    profesionales_necesarios: "Trabajador/a Social, Psicologo/a, Abogado/a",
    lugar_de_ejecucion: "Madrid - Distrito de Villaverde",
    id_administrador: num1,
    id_colaboradores: [num2, num3, num4],
    id_empresas: [num5, num15],
    lat: 40.4808432,
    lon: -3.7261188,
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879093/SocialCoWorker/alejandro-cartagena-KRzGB1Dd19Q-unsplash_imamnh.jpg"
  },
  
  // PROYECTO 2 AQUI
  
  {
    nombre: "Acompañamiento de Personas Mayores en situación de abandono",
    fase: "Busqueda de Recursos",
    colectivo: "Mayores",
    descripcion_del_proyecto: "En la ciudad de Madrid hay un gran numero de personas mayores que no cuentan con una red primaria . El proyecto pretende impulsar desde los distintos distritos una red informal de apoyo realizando una detección de mayores que no cuenten con ningun apoyo familiar",
    profesionales_necesarios: "Trabajador/a Social, Integrador/a Social, Educador/a Social",
    lugar_de_ejecucion: "Madrid - Distrito de Centro",
    id_administrador: num6,
    id_colaboradores: [num1, num7, num8, num3],
    id_empresas: [num10],
    lat: 40.4178273,
    lon: -3.7240931,
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583705100/centro_de_mayores_cq93qq.png"
  },
  {
    nombre: "ALfabetización y socialización de menores migrantes",
    fase: "Busqueda de Recursos",
    colectivo: "Población Inmigrante",
    descripcion_del_proyecto: "El proceso de alfabetización y socialización de menores migrantes pretende acercar a estos menores a toda la población del distrito de Hortaleza eliminando los prejuicios existentes en el barrio actual.",
    profesionales_necesarios: "Trabajador/a Social, Integrador/a Social, Monitor/a de Tiempo Libre",
    lugar_de_ejecucion: "Madrid - Distrito de ",
    id_administrador: num10,
    id_colaboradores: [num11, num12],
    id_empresas: [num15],
    lat: 40.4808432,
    lon: -3.6723893,
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879083/SocialCoWorker/brian-kndeneh-hMUH3zzjw6c-unsplash_nazm0s.jpg"
  },
  {
    nombre: "Mediación intercultural como metodo de resolución de conflictos",
    fase: "Fases Iniciales del proyecto",
    colectivo: "Otros",
    descripcion_del_proyecto: "Actualmente los Servicios de Mediación intercultural proporcionados por los agentes sociales en Ciudad Lineal están completamente colapsados. Es por esto por lo que se necesita urgentemente un plan de intervención a corto plazo para reforzar la convivencio de los vecinos.",
    profesionales_necesarios: "Trabajador/a Social, Integrador/a Social, Monitor/a de Tiempo Libre",
    lugar_de_ejecucion: "Madrid - Distrito Ciudad Lineal",
    id_administrador: num21,
    id_colaboradores: [num11, num12],
    id_empresas: [num17],
    lat: 40.4485996,
    lon: -3.6823189,
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879057/SocialCoWorker/leigh-cooper-hdBpDRalP20-unsplash_u2qak5.jpg"
  },{
    nombre: "Madrid, Ciudad de Turismo sin barreras",
    fase: "Fases Iniciales del proyecto",
    colectivo: "Diversidad Funcional",
    descripcion_del_proyecto: "Madrid es u una de las principales ciudades españolas en recibir turistas de todo el mundo, es por ello que como destino de turistico debemos intentar que cualquier persona pueda conocer nuestra ciudad, incluidas aquellas personas con movilidad reducida o cualquier problematica. A traves de este proyecto haremos hincapié para que los entornos más visitdas de nuestra ciudad estén libres de barreras",
    profesionales_necesarios: "Trabajador/a Social, Integrador/a Social, Monitor/a de Tiempo Libre",
    lugar_de_ejecucion: "Madrid - Distrito Chamberí",
    id_administrador: num21,
    id_colaboradores: [num11, num12],
    id_empresas: [num18],
    lat: 40.4361977,
    lon: -3.7216035,
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879068/SocialCoWorker/jack-gisel-tHhqErhxVMA-unsplash_gzy1c7.jpg"
  },
    {
      nombre: "Acompañamiento de personas sin hogar",
      fase: "Busqueda de Recursos",
      colectivo: "En Riesgo de Exclusión Social",
      descripcion_del_proyecto: "Cada vez son más las personas sin hogar que se niegan a recibir ayuda o de las que casi no conocemos nada. Para que puedan comenzar un recorrido de inserción social es necesario que empiecen a confiar en los agentes sociales, es por ello que a traves de grupos de Integradores Sociales coordinados por Trabajadores Sociales haremos un trabajo de calle para darles a conocer los distintos recursos de la CAM.",
      profesionales_necesarios: "Trabajador/a Social, Integrador/a Social, Monitor/a de Tiempo Libre",
      lugar_de_ejecucion: "Madrid - Carabanchel",
      id_administrador: num24,
      id_colaboradores: [num23, num22],
      id_empresas: [num19],
      lat: 40.3814031,
      lon: -3.7728569,
      image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879055/SocialCoWorker/jose-antonio-gallego-vazquez-1HxbDVXiUqo-unsplash_fry3vw.jpg"
    }
]
// Users AQUI

const user = [
  {
    _id: num1,
    username: "mfernandezfreire",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Manuel",
    apellidos: "Fernandez Freire",
    email: "mfernandezfreire@outlook.com",
    telefono: "657984421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Trabajador/a Social",
    cv_resumido: "Intervención 10 años en violencia de genero",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    _id: num2,
    username: "mfafoud",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Mafoud",
    apellidos: "Lambchadti",
    email: "mafoud@outlook.com",
    telefono: "657264421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Abogado/a",
    cv_resumido: "Abogado - iniciando especialización en violencia de genero",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    _id: num3,
    username: "lauraalbarran",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Laura",
    apellidos: "Albarran Lopez",
    email: "lauraalbarran@outlook.com",
    telefono: "657984356",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Psicologo/a",
    cv_resumido: "Psicologa - especializada en género con 5 años de experiencia en intervención",
    image: "https://randomuser.me/api/portraits/men/87.jpg"
  },
  {
    _id: num4,
    username: "borjasanchez",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Borja",
    apellidos: "Sanchez Flores",
    email: "borjasanchez@outlook.com",
    telefono: "655474421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Trabajador/a Social",
    cv_resumido: "Trabajador social - Estudiando master de violencia de género",
    image: "https://randomuser.me/api/portraits/men/37.jpg"
  },
  {
    _id: num6,
    username: "ivantenorio",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Ivan",
    apellidos: "Tenorio Fernandez",
    email: "ivanternorio@outlook.com",
    telefono: "655471256",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Trabajador/a Social",
    cv_resumido: "Trabajador social - especializado en mayores",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    _id: num7,
    username: "judithfernandez",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Judith",
    apellidos: "Fernandez Nogueira",
    email: "judithfernandez@outlook.com",
    telefono: "654254421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Integrador/a Social",
    cv_resumido: "Integradora Social - recien graduada con 10 años de experiencia en voluntariado de mayores",
    image: "https://randomuser.me/api/portraits/women/84.jpg"
  },
  {
    _id: num8,
    username: "rafaperez",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Rafael",
    apellidos: "Perez",
    email: "rafaelperez@outlook.com",
    telefono: "634574421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Terapeuta Ocupacional",
    cv_resumido: "Terapeuta Ocupacional - especializado en geriatria",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    _id: num9,
    username: "mariaquinteiro",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Mari",
    apellidos: "Quinteiro Cousiño",
    email: "mariaquinteiro@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Educador/a Social",
    cv_resumido: "Educador/a Social - Experta universitaria en gerontología",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    _id: num11,
    username: "ivanferrer",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Ivan",
    apellidos: "Ferrer Fernandez",
    email: "ivanferrerfernandez@outlook.com",
    telefono: "623434421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Trabajador/a Social",
    cv_resumido: "Trabajador Social - Experto universitario en Dirección de SS.SS",
    image: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    _id: num12,
    username: "armandomomo",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Armando",
    apellidos: "Momo Mete",
    email: "armandomete@outlook.com",
    telefono: "667336721",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Educador/a Social",
    cv_resumido: "Educador/a Social - 10 años de experiencia en atención de menores",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    _id: num13,
    username: "frankymolina",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Franky",
    apellidos: "Molina Torrejon",
    email: "frankymolina@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Educador/a Social",
    cv_resumido: "Educador Social - Master en migraciones",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    _id: num14,
    username: "pcarceller",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Pablo",
    apellidos: "Carceller Sabater",
    email: "pcarceller@outlook.com",
    telefono: "663454421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Integrador/a Social",
    cv_resumido: "Integrador/a Social - Recien graduado con experiencia en menores",
    image: "https://randomuser.me/api/portraits/men/68.jpg"
  },
  {
    _id: num16,
    username: "robertorey",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Roberto",
    apellidos: "Rey Lopez",
    email: "robertoreylopez@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Sociologo/a",
    cv_resumido: "Sociologo - Master en proyectos sociales",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    _id: num20,
    username: "robertorey",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Roberto",
    apellidos: "Rey Lopez",
    email: "robertoreylopez@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Sociologo/a",
    cv_resumido: "Sociologo - Master en proyectos sociales",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
    {
    _id: num21,
    username: "valentingarcia",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Valentin",
    apellidos: "Garcia Lopez",
    email: "valentingarcialopez@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Abogado/a",
    cv_resumido: "Abogado - Especializado en causas sociales",
    image: "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    _id: num22,
    username: "joseluisyagues",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Roberto",
    apellidos: "Rey Lopez",
    email: "robertoreylopez@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Antropólogo/a",
    cv_resumido: "Antropólogo - Experto Universitario en Nuevas Tecnologías",
    image: "https://randomuser.me/api/portraits/men/69.jpg"
  },
  {
    _id: num23,
    username: "jorgeferrer",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Jorge",
    apellidos: "Ferrer Sanz",
    email: "jorgeferrersanz@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Terapeuta Ocupacional",
    cv_resumido: "Terapeuta Ocupacional - Especializado en diversidad funcional",
    image: "https://randomuser.me/api/portraits/men/94.jpg"
  },
  {
    _id: num24,
    username: "miriamvaleriano",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Profesional",
    nombre: "Miriam",
    apellidos: "Valeriano Soto",
    email: "miriamvaleriano@outlook.com",
    telefono: "667374421",
    perfil_de_linkedin: "linkedin.com/in/false",
    profesion: "Psicologo/a",
    cv_resumido: "Psicologo/a - Master en Psicología Clínica",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  // PROYECTO
  // PROYECTO 1
  {
    _id: num5,
    username: "lacaxa",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "La Caxa",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Carolina Perez",
    telefono: "646789056",
    email: "lacaxa@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879028/SocialCoWorker/johnson-wang-iI4sR_nkkbc-unsplash_cchquo.jpg"
  },
  {
    _id: num10,
    username: "realidad",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "Asociación Realidad",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Francisco Sanchez",
    telefono: "646789789",
    email: "asociacionrealidad@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879034/SocialCoWorker/priscilla-du-preez-XkKCui44iM0-unsplash_csle3p.jpg"
  },
  {
    _id: num15,
    username: "rojacruz",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "Roja Cruz",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Fernando Aldecoa",
    telefono: "643459789",
    email: "rojacruz@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879038/SocialCoWorker/austin-distel-mpN7xjKQ_Ns-unsplash_mfr6ro.jpg"
  },
  {
    _id: num17,
    username: "carritas",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "Children the save",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Laura Perez",
    telefono: "643567893",
    email: "childrenthesave@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879038/SocialCoWorker/austin-distel-mpN7xjKQ_Ns-unsplash_mfr6ro.jpg"
  },
  {
    _id: num18,
    username: "ACMY",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "ACMY",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Benedicto Pope",
    telefono: "643567125",
    email: "acmy@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879042/SocialCoWorker/annie-spratt-FSFfEQkd1sc-unsplash_ispbaf.jpg"
  },
  {
    _id: num19,
    username: "childrensave",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    rol: "Empresa",
    nombre: "Children the save",
    busca: "Ideas",
    perfil_de_linkedin: "linkedin.com/in/false",
    persona_de_contacto: "Cristina Sanchez",
    telefono: "643567894",
    email: "childrenthesave@gmail.com",
    image: "https://res.cloudinary.com/dagreomkt/image/upload/v1583879050/SocialCoWorker/austin-distel-wD1LRb9OeEo-unsplash_qhzsuz.jpg"
  }
]

// COMPANIES INICIALES

const company = [
  //PROYECTO 1
  {
    _id: num26,
    username: "lacaxa",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "La Caxa",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Carolina Perez",
    telefono: "646789056",
    email: "lacaxa@gmail.com",
    image: null
  },
  {
    _id: num27,
    username: "realidad",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "Asociación Realidad",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Francisco Sanchez",
    telefono: "646789789",
    email: "asociacionrealidad@gmail.com",
    image: null
  },
  {
    _id: num28,
    username: "rojacruz",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "Roja Cruz",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Fernando Aldecoa",
    telefono: "643459789",
    email: "rojacruz@gmail.com",
    image: null
  },
  {
    _id: num29,
    username: "childrensave",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "Children the save",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Cristina Sanchez",
    telefono: "643567894",
    email: "childrenthesave@gmail.com",
    image: null
  },
  {
    _id: num30,
    username: "carritas",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "Children the save",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Laura Perez",
    telefono: "643567893",
    email: "childrenthesave@gmail.com",
    image: null
  },
  {
    _id: num31,
    username: "ACMY",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    nombre: "ACMY",
    busca: "Ideas",
    perfil_de_linkedin: null,
    persona_de_contacto: "Benedicto Pope",
    telefono: "643567125",
    email: "acmy@gmail.com",
    image: null
  }
]

mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    User.deleteMany()
      .then(() => {
        return User.create(user);
      })
    Project.deleteMany()
          .then(() => {
            return Project.create(project);
          })
    Company.deleteMany()
        .then(() => {
          return Company.create(company);
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

