import React from "react";
import { Box } from "@chakra-ui/react";
import { Center, Image } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Inmueble = ({ inmueble }) => {
  const {id, nombre, precio, descripcion, ubicacion, imagen, disponible } =
    inmueble;

  const navigate = useNavigate()

    const propPage = () => {
      navigate(`http://localhost:8080/api/propiedades/${id}`)
    }

  return (
    <div onClick={propPage}>
      <Box  textAlign="center"  color="#0D1B2A" fontFamily="Homer Simpson UI">
      <Container fontSize="2em" fontWeight="bold">{nombre}</Container>
      

        <Center>
          <Image boxSize="70%" borderRadius={25} src={imagen} alt="Propiedad" />
        </Center>
        {/* <img src={imagen} alt="" /> */}

        <Container fontSize="1em"> USD {precio}.000</Container>

        <Container fontSize="1em">{descripcion}</Container>

        <Container>{disponible}</Container>

        <Container fontSize="1em">Ubicacion: {ubicacion}</Container>
      </Box>
    </div>
  );
};

export default Inmueble;
