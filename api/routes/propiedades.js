const express = require('express')
const routerPropiedades = express.Router()
const {db, Propiedades} = require("../models/index");

routerPropiedades.get("/", (req,res) => {
    Propiedades.findAll()
    .then(casa => {
        res.status(201).send(casa)
    })
})

routerPropiedades.get("/prop/:id", (req,res) => {
    const {id} = req.params
    Propiedades.findOne({ where: {id}})
    .then(casa => {
        res.status(201).send(casa)
    })
      .catch(err => {
        console.log(err)
      })
})


module.exports = routerPropiedades;