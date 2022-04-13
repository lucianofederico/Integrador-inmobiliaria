const express = require ("express")
const routerAdmin = express.Router()
const {db, User, Propiedades} = require ("../models/index")

// ------------------------------------------------- usuarios -------------------------------------------------

routerAdmin.get("/showuser", (req,res) =>{
     User.findAll()
     .then(users =>{
         res.status(201).send(users)
     })
     .catch(err => console.log(err))
})

routerAdmin.get("/showuser/:id",(req,res) =>{
    const {id} = req.params
    User.findOne({where:{id}})
    .then(users =>{
        res.status(201).send(users)
    })
    .catch(err => console.log(err))
})

routerAdmin.delete("/deleteuser/:id", (req, res) => {
    const {id} = req.params
        User.destroy({
            where: {
                id:id
            }
        })
        .then((data) => res.sendStatus(202))
        .catch(err => console.log(err))
})

// routerAdmin.post("/changeuser", (req,res)=>{
//     const {admin} = req.body
//     User.update(req.body,{
//         where:{
//             admin:admin,
//         }})
//         .then(() => res.sendStatus(200))
//         .catch (err => console.log(err))
// })

// ------------------------------------------------- Propiedades -------------------------------------------------

routerAdmin.post("/addprop", (req,res) => {
    const { nombre, descripcion, precio, ubicacion, imagen, disponible, categoria } = req.body
    Propiedades.create({
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        ubicacion: ubicacion,
        imagen: imagen,
        disponible:disponible,
        categoria: categoria
    })
    .then(prop => {
        res.status(201).send(prop)
    })
    .catch(err => console.log(err))
})

routerAdmin.delete("/deleteprop/:id", (req,res) => {
    const {id} = req.params
    Propiedades.destroy({
        where:{
            id:id
        }})
        .then((data)=> res.sendStatus(202))
        .catch(err => console.log(err))
})

routerAdmin.post("/changeprop", (req,res) =>{
    const { nombre, descripcion, precio, ubicacion, imagen, disponible, categoria } = req.body
    Propiedades.update({
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        ubicacion: ubicacion,
        imagen: imagen,
        disponible:disponible,
        categoria: categoria
    })
    .then(prop => {
        res.status(201).send(prop)
    })
})


module.exports = routerAdmin;