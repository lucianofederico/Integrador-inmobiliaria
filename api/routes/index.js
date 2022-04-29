const express=require('express');
const router=express.Router();
const user = require('./users')
const propiedades = require("./propiedades")
const admin = require("./admin")
const sendEmail = require("./sendEmail")


router.use('/users', user)
router.use('/propiedades', propiedades)
router.use("/admin", admin)
router.use("/sendEmail", sendEmail)

module.exports = router


// Propiedades.findAll({ where: {nombre : {[Op.iLike]: `%${busqueda}%`}}})
// .then(casas => {
//   console.log("casas", casas)
//   return response.json({
//     casas: casas
// })
// .catch(err => {
//     res.status(404)
//   console.log(err)
// })
// })