import React from "react";
import axios from "axios";


import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';


export default function contact() {



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/sendEmail/send-email", {
        name: e.target.name.value,
        email:e.target.email.value,
        message: e.target.message.value,
      })
      .then((res) => res.data)
      .then((datos) => {
        console.log(datos);
        e.target.name.value = ""
        e.target.email.value = ""
        e.target.message.value = ""
      });
      
  };
  
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#5C6F68"
          color="white"
          borderRadius="lg"
>
          <Box p={4} >
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading >Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                    Dejanos tu mensaje
                  </Text>
                </Box>
              </WrapItem>
              <WrapItem>
                <form onSubmit={handleSubmit}>
                <Box bg="white" borderRadius="lg">
                  <Box m={5} color="#0B0E3F">
                    <VStack >
                      <FormControl id="name">
                        <FormLabel mt={5}>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
  
                          <Input type="text" name="name" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Input type="text" name="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                        name="message"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                         
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                        mb={5}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          type="submit">
                          
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
                </form>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

  //   <label>nombre
  //   <input type="text" name="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
  //   </label>

  //   <label>descripcion
  //   <input type="text" name="descripcion" value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}/>
  //   </label>

  //   <label>precio
  //   <input type="text" name="precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}/>
  //   </label>

  //   <label>ubicacion
  //   <input type="text" name="ubicacion" value={ubicacion} onChange={(e)=>{setUbicacion(e.target.value)}}/>
  //   </label>

  //   <label>categoria
  //   <input type="text" name="categoria" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}/>
  //   </label>

  //   <label>imagen
  //   <input type="text" name="imagen" value={imagen} onChange={(e)=>{setImagen(e.target.value)}}/>
  //   </label>


  //   <label>disponible 
  //   <input type="text" name="disponible" value={disponible} onChange={(e)=>{setDisponible(e.target.value)}}/>
  //   </label>

  //   <button type="submit">crear</button>

















































// import React, { useEffect } from "react";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Logout from "../components/Logout";
// import { Box, Button, ButtonGroup, Container, FormControl, FormLabel } from "@chakra-ui/react";
// import "../templates/inmuebles.css";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
// import { Center } from "@chakra-ui/react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Stack, Input } from "@chakra-ui/react";


// const Contacto = () => {
//   return (
//     <Box >
//     <Container fontWeight="bold" mt={6} color="orange.600" fontSize={30}> Contacto </Container>
//     <FormControl isRequired>
// <FormLabel mt={5}>Nombre</FormLabel>
// <Input  placeholder='Nombre' width={60} mb={5}/>
// <FormLabel >Telefono</FormLabel>
// <Input  placeholder='Telefono' width={60} mb={5}/>
// <FormLabel >Email</FormLabel>
// <Input  placeholder='Email' width={60} mb={5}/>
// <FormLabel >Mensaje</FormLabel>
// <Input  placeholder='Mensaje' width={60} />
// </FormControl>
//     </Box>
//   )
// }

// export default Contacto