import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let [userList, setUserList] = useState([]);
  let [propList, setPropList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/admin/showuser")
      .then((userList) => setUserList(userList.data));
  }, []);

  const eliminarUsuario = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    console.log("antes del axios", id);
    axios
      .delete(`/api/admin/deleteuser/${id}`)
      .then((user) => console.log("ELIMINADO"));
  };

  useEffect(() => {
    axios
      .get("/api/propiedades/")
      .then((propList) => setPropList(propList.data));
  }, []);

  const eliminarPropiedad = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    axios
      .delete(`/api/admin/deleteprop/${id}`)
      .then((prop) => console.log("ELIMINADO"));
  };

  const handleDelete = (id) => {
    console.log("ID antes de eliminar", id);
    axios
      .delete(`/api/admin/deleteuser/${id}`)
      .then((user) => console.log("ELIMINADO"))
      .then(()=>{
        axios
      .get("/api/admin/showuser")
      .then((userList) => setUserList(userList.data));
      })
  };

  const handleDeleteProp = (id) => {
    console.log("ID antes de eliminar", id);
    axios
    .delete(`/api/admin/deleteprop/${id}`)
    .then((prop) => console.log("ELIMINADO"))
    .then(()=>{
      axios
      .get("/api/propiedades/")
      .then((propList) => setPropList(propList.data))
    })
  };

  

  return (
    <Box minHeight="100vh">
      <Link to="/">
        <Button className="boton" m={10}>
          Volver
        </Button>
      </Link>
      <Box textAlign="center" fontWeight="bold" mb={5} fontSize={30}>
        Lista de todos los usuarios
      </Box>
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          ID
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Nombre
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Apellido
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Direccion
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Telefono
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Email
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Eliminar
        </GridItem>

        {userList
          ? userList.map((user) => (
              <>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {user.id}{" "}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {user.name}{" "}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {user.surname}{" "}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {user.direction}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {" "}
                  {user.phoneNumber}{" "}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {user.email}{" "}
                </GridItem>
                <GridItem>
                  <IconButton
                    onClick={() => handleDelete(user.id)}
                    type="submit"
                    w="100%"
                    h="10"
                    bg="blue.500"
                    border="solid black"
                    textAlign="center"
                    icon={<DeleteIcon />}
                  />
                </GridItem>
              </>
            ))
          : null}
      </Grid>



      <Box textAlign="center" fontWeight="bold" mb={5} fontSize={30} mt={20}>
        Lista de todas las propiedades
      </Box>
      <Link to="/addprop">
      <Button ml={10} mb={10}>Agregar propiedad</Button>
      </Link> 
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          ID
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Nombre
        </GridItem>
        {/* <GridItem fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Descripcion
        </GridItem> */}
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Precio
        </GridItem>
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Ubicacion
        </GridItem>
        {/* <GridItem fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Imagen
        </GridItem> */}
        {/* <GridItem fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Disponible
        </GridItem> */}
        {/* <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Categoria
        </GridItem> */}
        <GridItem
          fontWeight="bold"
          w="100%"
          h="10"
          bg="#6C809A"
          border="solid black"
          textAlign="center"
        >
          {" "}
          Eliminar
        </GridItem>
        {propList
          ? propList.map((prop) => (
              <>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.id}{" "}
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.nombre}{" "}
                </GridItem>
                {/* <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.descripcion}{" "}
                </GridItem> */}
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  USD {prop.precio}.000
                </GridItem>
                <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {" "}
                  {prop.ubicacion}{" "}
                </GridItem>
                {/* <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.imagen}{" "}
                </GridItem> */}
                {/* <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.disponible}{" "}
                </GridItem> */}
                {/* <GridItem
                  w="100%"
                  h="10"
                  bg="blue.500"
                  border="solid black"
                  textAlign="center"
                >
                  {prop.categoria}{" "}
                </GridItem> */}
                <GridItem>
                  <IconButton
                    onClick={() => handleDeleteProp(prop.id)}
                    type="submit"
                    w="100%"
                    h="10"
                    bg="blue.500"
                    border="solid black"
                    textAlign="center"
                    icon={<DeleteIcon />}
                  />
                </GridItem>
              </>
            ))
          : null}
      </Grid>

      {/* <form onSubmit={eliminarPropiedad}>
        <FormLabel mt={5} ml={10} fontWeight="bold">
          Propiedad a eliminar
        </FormLabel>
        <Input
          ml={10}
          width={300}
          type="number"
          name="id"
          placeholder="ID de la propiedad a eliminar"
          mr={5}
          mb={10}
        />
        <IconButton
          type="submit"
          variant="outline"
          colorScheme="red"
          icon={<DeleteIcon />}
        />
      </form> */}
    </Box>
  );
};

export default Admin;
