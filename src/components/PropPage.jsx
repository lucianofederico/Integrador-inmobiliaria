import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Container,
  Image,
  Button,
  Center
} from "@chakra-ui/react";
import Contacto from "../commons/Contacto";
import { Divider } from "@chakra-ui/react";

const PropPage = () => {
  const { id } = useParams();
  const [prop, setProp] = useState();

  useEffect(() => {
    axios
      .get(`/api/propiedades/${id}`)
      .then((prop) => setProp(prop.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box minHeight="100vh" >

<Link to="/">
      <Button className="boton" m={25} color="orange.500">
      Volver
      </Button>
      </Link>
      <Box display="flex" className="probando" >
        <Box ml={10} textAlign="center" >
          
          {prop ? <Container  fontSize={60} color="orange.900">{prop.nombre}</Container> : null}
          <Center>
          {prop ? (
            <Image
            mb={5}
              boxSize="60%"
              borderRadius={25}
              src={prop.imagen}
              alt="Propiedad"
            />
          ) : null}
          </Center>
          {prop ? (
            <Container mb={5} fontSize={20}>{prop.descripcion}</Container>
          ) : null}
          {prop ? (
            <Container mb={5} fontSize={20}> Precio: USD {prop.precio}.000</Container>
          ) : null}
          {prop ? <Container mb={10}>Ubicacion: {prop.ubicacion}</Container> : null}
        </Box>
        <Contacto />
      </Box>
    </Box>
  );
};

export default PropPage;



