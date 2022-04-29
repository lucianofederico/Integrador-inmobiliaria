import React, { useEffect, useState, useRef } from "react";
import Grilla from "../components/Grilla";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import "../templates/inmuebles.css";
import { useDispatch } from "react-redux";
import { setPropiedad } from "../store/propiedades";
import Contacto from "../commons/Contacto";
import axios from "axios";
import Categorias from "../commons/Categorias";

import {
  Input,
  Checkbox,
  Center,
  Box,
  Button,
  Container,
} from "@chakra-ui/react";




const Home = () => {
  const dispatch = useDispatch();

  const isLoged = useSelector((state) => state.user);

  const grilla = useRef(null)






 const handleSubmit = (e) => {
    e.preventDefault()
     axios
     .post("/api/propiedades/buscador",{
      busqueda: e.target.busqueda.value,
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .then((datos) => {
      console.log(datos);
      e.target.busqueda.value = ""
      grilla.current.scrollIntoView()
    })
     .catch(err =>console.log(err))
  }





  return (
    <div>
      <Box backgroundRepeat="no-repeat" backgroundImage="https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height={800} backgroundPosition="center 0">
    

      <Box display="flex" padding={5} justifyContent="flex-end">
        <Container fontSize={30} color="orange.500">
          {isLoged ? <h1>Hola {isLoged.name}! </h1> : null}{" "}
        </Container>

        {!isLoged ? (
          <Box margin={5}>
            <Link to="/login">
              <Button className="boton" size="md" color="orange.500">
                Login
              </Button>
            </Link>
          </Box>
        ) : null}
        
        <Box margin={5}>
        {!isLoged ?(
          <Link to="/register">
            <Button className="boton" size="md" color="orange.500" mr={10}>
              Registrarse
            </Button>
          </Link>
          ) : null}
          {isLoged ? (
            isLoged.admin ? (
              <Link to="/administrador">
                <Button ml={3} color="orange.500" >Admin</Button>
              </Link>
            ) : null
          ) : null}
        </Box>
        {isLoged ? (
          <Box margin={5}>
            <Logout />
          </Box>
        ) : null}
      </Box>
      <Box mt={50} backgroundColor="blackAlpha.500">
        <Center>
          <Box display="flex" mb={20} mt={90}>
            <Container   color="tomato" fontSize={50} className="probando">
            Encontrá la propiedad de tus sueños
            </Container>


            
          <form onSubmit={handleSubmit} className="busqueda">
         
              <Input
              name="busqueda"
              height={70}
                width={500}
                color="tomato"
                placeholder="Buscar por nombre"
                _placeholder={{ opacity: 0.9, color: "#F39237" }}
              />

            <Button mr={10} type="submit" className="boton" marginLeft={5} size="lg" color="orange.500" height={70}>
              Buscar
            </Button>

              </form>
         



          </Box>
        </Center>
      </Box>
      </Box>
      <Box display="flex">
        <Box>
        <Categorias/>
            <Box mt={40}>
              <Contacto />
            </Box>
          </Box>

        <Grilla grilla={grilla}/>

      </Box>
    </div>
  );
};

export default Home;
