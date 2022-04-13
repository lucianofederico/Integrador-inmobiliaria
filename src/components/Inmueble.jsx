import React from "react";
import { Box } from "@chakra-ui/react";
import { Center, Image } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Inmueble = ({ inmueble }) => {
  const {id, nombre, precio, descripcion, ubicacion, imagen, disponible } =
    inmueble;

    const [propList, setPropList] = useState({});

  const navigate = useNavigate()

    const propPage = () => {
      navigate(`/propiedades/${id}`)
    }

  return (

      <Box pb={5} onClick={propPage} textAlign="center"  color="#0D1B2A" className="probando" backgroundColor="#F2ED6F" mr={10}>

      <Container  mt={10} color="orange.900" fontSize="2em" fontWeight="bold">{nombre} </Container>
      

        <Center>

          <Image my={10} boxSize="70%" borderRadius={25} src={imagen} alt="Propiedad" _hover={10}/>

        </Center>


        <Container  fontSize="1em"><strong>Precio: USD {precio}.000 </strong> </Container>

        {/* <Container fontSize="1em">{descripcion}</Container> */}

        <Container>{disponible}</Container>

        <Container fontSize="1em" > <strong> Ubicacion: {ubicacion} </strong> </Container>
      </Box>
  );
};

export default Inmueble;
