const express = require("express");
const routerUser = express.Router();
const { db, User } = require("../models/index");
const passport = require("passport");

routerUser.post("/login", passport.authenticate("local"), (req, res) => {
  try {
    console.log("logueooo", req.user)
    res.json(req.user);
  }
  catch (e){ 
    console.log("Hay un error", e)
  }
});

routerUser.post("/register", (req, res) => {
  const user = req.body;
  User.create(user)
  .then((user) => {
    res.status(201).send(user);
  })
  .catch(err => {
    console.log(err)
  })
});

routerUser.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

routerUser.get("/me", (req, res) => {
  console.log("user back", req.user)
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

routerUser.post("/me", (req, res) => {
  const { name, surname, email, password, direction, phoneNumber } = req.body;
  User.update(req.body, {
    where: {
      name: name,
      surname: surname,
      email: email,
      password: password,
      direction: direction,
      phoneNumber: phoneNumber,
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => console.log(err));
});



module.exports = routerUser;



//  <GridItem>
// <IconButton
// onClick={()=>handleDelete(user.id)}
// type="submit"
// variant="outline"
// colorScheme="red"
// icon={<DeleteIcon />}
// />
//         </GridItem> 

//         const handleDelete = (id) => {
//           console.log("ID", id)
//        }