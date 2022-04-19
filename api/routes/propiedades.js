const express = require('express')
const routerPropiedades = express.Router()
const {db, Propiedades} = require("../models/index");
const { Op } = require ("sequelize")
const sequelize = require('sequelize');

routerPropiedades.get("/", (req,res) => {
    Propiedades.findAll()
    .then(casa => {
        res.status(201).send(casa)
    })
    .catch(err => {
        console.log(err)
      })
})

routerPropiedades.get("/:id", (req,res) => {
    const {id} = req.params
    Propiedades.findOne({ where: {id}})
    .then(casa => {
        res.status(201).send(casa)
    })
      .catch(err => {
          res.status(404)
        console.log(err)
      })
})

routerPropiedades.post("/buscador", (req,res)=>{
  const {busqueda} = req.body
   // busqueda = busqueda.toLowerCase()
   
  Propiedades.findAll({ 
    where: {nombre : {[Op.iLike]: `%${busqueda}%`}}})
  .then(casas => {
    console.log("casas", casas)
    res.status(201).send(casas)
})
  .catch(err => {
      res.status(404)
    console.log(err)
  })
})

routerPropiedades.post("/categoria", (req,res) => {
  console.log("body ", req.body)
  const { categoria } = req.body
  Propiedades.findAll({ 
    where: {categoria : {[Op.contains]: categoria}}})
  .then(casas => {
    console.log("casas", casas)
    res.status(201).send(casas)
})
  .catch(err => {
      res.status(404)
    console.log(err)
  })
})




module.exports = routerPropiedades;


