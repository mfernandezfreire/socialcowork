require('dotenv').config();
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require("bcrypt")
const bcryptSalt = 10;


const user = [{
    username: "mfernandezfreire",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt))
}]



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
            .then(() => {
                console.log("succesfully added all the data");
                mongoose.connection.close();
                process.exit(0);
            });
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    })