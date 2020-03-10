require('dotenv')
const express = require('express');
const User = require('../../models/User');
const Project = require('../../models/Project')
const router = express.Router();
const uploadCloud = require('../../config/cloudinary');


router.get('/allprojects', (req, res, next) => {
    Project.find().populate({
            path: 'id_administrador',
            model: 'User'
        })
        .populate({
            path: 'id_colaboradores',
            model: 'User'
        })
        .then(projects => res.json(projects))
})


router.get('/projectsadmin/:id', (req, res, next) => {
    Project.find({
            id_administrador: req.params.id
        })
        .populate({
            path: 'id_colaboradores',
            model: 'User'
        })
        .then(projects => res.json(projects))
})

router.get('/projectscompany/:id', (req, res, next) => {
    Project.find({
            id_empresas: req.params.id
        })
        .populate({
            path: 'id_colaboradores',
            model: 'User'
        })
        .populate({
            path: 'id_administrador',
            model: 'User'
        })
        .then(projects => res.json(projects))
})

router.get('/projectscolaborator/:id', (req, res, next) => {
    Project.find({
            id_colaboradores: req.params.id
        })
        .then(projects => res.json(projects))
})

router.get('/projectadmin/:id', (req, res, next) => {
    Project.findById(req.params.id).populate({
            path: 'id_colaboradores',
            model: 'User'
        })
        .then(projects => res.json(projects))
})

router.post('/createproject', (req, res, next) => {
    const {
        nombre,
        fase,
        colectivo,
        descripcion_del_proyecto,
        lugar_de_ejecucion,
        id_administrador,
        id_colaboradores,
        id_empresas,
        image
    } = req.body
    Project.create({
            nombre,
            fase,
            colectivo,
            descripcion_del_proyecto,
            lugar_de_ejecucion,
            id_administrador,
            id_colaboradores,
            id_empresas,
            image
        })
        .then(() => res.json({
            status: 'user created'
        }))
        .catch(err => next(new Error(err)))
})

router.put('/projectedit/:id', (req, res, next) => {
    const {
        nombre,
        colectivo,
        descripcion_del_proyecto,
        lugar_de_ejecucion,
        id_administrador,
        id_colaboradores,
        id_empresas,
        image
    } = req.body
    const data = {
        nombre: nombre,
        colectivo: colectivo,
        descripcion_del_proyecto: descripcion_del_proyecto,
        lugar_de_ejecucion: lugar_de_ejecucion,
        id_administrador: id_administrador,
        id_colaboradores: id_colaboradores,
        id_empresas: id_empresas,
        image: image
    }
    Project.findByIdAndUpdate(req.params.id, data, {
            new: true
        })
        .then(project => res.json({
            status: 'Project modified',
            project: project
        }))
        .catch(err => next(new Error(err)))
})

router.delete('/projectdelete/:id', (req, res, next) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json({
            status: 'Project delete'
        }))
        .catch(err => next(new Error(err)))
})

router.put('/editprofile/:id', (req, res, next) => {
    const {
        username,
        password,
        rol,
        nombre,
        apellidos,
        email,
        telefono,
        perfil_de_linkedin,
        profesion,
        cv_resumido,
        image
    } = req.body
    const data = {
        username: username,
        password: password,
        rol: rol,
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        perfil_de_linkedin: perfil_de_linkedin,
        profesion: profesion,
        cv_resumido: cv_resumido,
        image: image
    }
    User.findByIdAndUpdate(req.params.id, data, {
            new: true
        })
        .then(user => res.json({
            status: 'User modified',
            user: user
        }))
        .catch(err => next(new Error(err)))
})


// Terminar RUTAS ADD!!

router.put('/deletecolaborator/:id', (req, res, next) => {
    const {
        colaborator
    } = req.body
    Project.findByIdAndUpdate(req.params.id, {
            $pull: {
                id_colaboradores: colaborator
            }
        }, {
            new: true
        })
        .then(user => res.json({
            status: 'User modified',
            user: user
        }))
        .catch(err => next(new Error(err)))
})

router.put('/addcolaborator/:id', (req, res, next) => {

    const {
        colaborator
    } = req.body
    Project.findByIdAndUpdate(req.params.id, {
            $push: {
                id_colaboradores: colaborator
            }
        }, {
            new: true
        })
        .then(user => res.json({
            status: 'Project modified',
            user: user
        }))
        .catch(err => next(new Error(err)))
})

router.put('/addcompany/:id', (req, res, next) => {

    const {
        colaborator
    } = req.body
    Project.findByIdAndUpdate(req.params.id, {
            $push: {
                id_empresas: colaborator
            }
        }, {
            new: true
        })
        .then(user => res.json({
            status: 'Project modified',
            user: user
        }))
        .catch(err => next(new Error(err)))
})

router.put('/addproject/:id', (req, res, next) => {
    const {
        _id
    } = req.body
    Project.findByIdAndUpdate(req.params.id, {
            id_colaboradores: _id
        }, {
            new: true
        })
        .then(user => res.json({
            status: 'Project modified',
            user: user
        }))
        .catch(err => next(new Error(err)))
})

router.get('/search/:name', (req, res, next) => {
    Project.find({
                colectivo: new RegExp(req.params.name, "gi")
        }).sort({
            nombre: -1
        }).populate({
            path: 'id_administrador',
            model: 'User'
        })
        .populate({
            path: 'id_colaboradores',
            model: 'User'
        })
        .then(projects => res.json(projects))
})


//Cloudinary
router.post('/upload', uploadCloud.single('image'), (req, res, next) => {
    
    if(!req.file){
        next(new Error('No file uploaded'));
        return;
    }
    res.json({secure_url:req.file.secure_url})
  });



module.exports = router;