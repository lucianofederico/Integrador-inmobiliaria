import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setPropiedad } from "../store/propiedades";
import CategoriaForm from "../commons/CategoriaForm";
import { Link } from "react-router-dom"
import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Alert,
  AlertIcon,
  CloseButton
} from "@chakra-ui/react";

export default function CrearProp() {
  const dispatch = useDispatch();

  const [arrayCategorias, setArrayCategorias] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [creado, setCreado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/admin/addprop", {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        ubicacion: ubicacion,
        imagen: imagen,
        categoria: arrayCategorias,
        // disponible: disponible
      })
      .then((res) => res.data)
      .then((datos) => {
        dispatch(setPropiedad(datos));
      })
      .then(()=>{
        setCreado(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box minHeight="100vh">
      <Link to="/administrador">
        <Button className="boton" m={10}>
          Volver
        </Button>
      </Link>

      <Container p={10} maxW="full" mt={0} centerContent overflow="hidden">
        {creado ? (
          <Alert status="success">
            <AlertIcon />
            Propiedad creada correctamente
            <CloseButton onClick={()=>setCreado(false)} position='absolute' right='8px' top='8px' />
          </Alert>
        ) : null}
        <Flex>
          <Box bg="#5C6F68" color="white" borderRadius="lg">
            <Box p={10}>
              <Box>
                <Heading>Crear propiedad</Heading>
              </Box>

              <WrapItem>
                <form onSubmit={handleSubmit}>
                  <Box bg="white" borderRadius="lg">
                    <Box m={5} color="#0B0E3F" display="flex">
                      <VStack>
                        <FormControl id="name">
                          <FormLabel mt={5}>Nombre</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              name="name"
                              size="md"
                              value={nombre}
                              onChange={(e) => {
                                setNombre(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Descripcion</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              name="email"
                              size="md"
                              value={descripcion}
                              onChange={(e) => {
                                setDescripcion(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Precio</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              name="email"
                              size="md"
                              value={precio}
                              onChange={(e) => {
                                setPrecio(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>Ubicacion</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              name="email"
                              size="md"
                              value={ubicacion}
                              onChange={(e) => {
                                setUbicacion(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl>
                          <FormLabel>URL imagen</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              name="email"
                              size="md"
                              value={imagen}
                              onChange={(e) => {
                                setImagen(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        {/* <FormControl >
                  <FormLabel>Disponible</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input type="boolean" name="email" size="md" value={disponible} onChange={(e)=>{setDisponible(e.target.value)}}/>
                  </InputGroup>
                </FormControl> */}
                        <FormControl id="name" float="right">
                          <Button
                            mb={5}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                            type="submit"
                          >
                            Crear
                          </Button>
                        </FormControl>
                      </VStack>
                      <CategoriaForm
                        arrayCategorias={arrayCategorias}
                        setArrayCategorias={setArrayCategorias}
                      />
                    </Box>
                  </Box>
                </form>
              </WrapItem>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

// <form onSubmit={handleSubmit}>
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
