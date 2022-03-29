const express=require('express');
const router=express.Router();
const user = require('./users')
const propiedades = require("./propiedades")
const admin = require("./admin")


router.use('/users', user)
router.use('/propiedades', propiedades)
router.use("/admin", admin)

module.exports = router