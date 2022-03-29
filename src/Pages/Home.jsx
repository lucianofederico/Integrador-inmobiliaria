import React, { useEffect } from "react";
import Grilla from "../components/Grilla";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import { Box, Button, ButtonGroup, Container } from "@chakra-ui/react";
import "../templates/inmuebles.css";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

import { Stack, Input } from "@chakra-ui/react";


const Home = () => {

  const usuario = useSelector((state) => state.user);

  return (
    <div>
      <Box display="flex" padding={5} justifyContent="flex-end">
        <Container fontSize={30} color="orange.600">{usuario ? <h1>Hola {usuario.name}! </h1> : null} </Container>

        <Box margin={5}>
          <Link to="/login">
            <Button className="boton" size="md">
              Login
            </Button>
          </Link>
        </Box>
        <Box margin={5}>
          <Link to="/register">
            <Button className="boton" size="md">
              Registrarse
            </Button>
          </Link>
        </Box>
        <Box margin={5}>
          <Logout />
        </Box>
      </Box>
      <Box>
        <Center>
        <Box display="flex" mb={20} mt={10}>
          <Container fontSize="2em" fontFamily="Verdana" >Busca tu propiedad</Container>
          <Stack>
            <Input  
              width={500}
              color="tomato"
              placeholder="Buscar por nombre"
              _placeholder={{ opacity: 0.4, color: "#F39237" }}
            />
          </Stack>
          <Button className="boton" marginLeft={5} size="lg">
              Buscar
            </Button>
        </Box>
        </Center>
      </Box>
      <Box display="flex" >
        <Box>
          <Box marginTop={100}>
            {" "}
            <strong>Categorias</strong>
          </Box>
          <Checkbox colorScheme="orange">
            Casa
          </Checkbox>

          <Checkbox  colorScheme="orange">
            Departamento
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            Terreno
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            Pileta
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            {" "}
            2 ambientes
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            3 ambientes
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            4 ambientes
          </Checkbox>
          <br />
          <Checkbox  colorScheme="orange">
            5 ambientes
          </Checkbox>
        </Box>
        <Grilla />
      </Box>
    </div>
  );
};

export default Home;
