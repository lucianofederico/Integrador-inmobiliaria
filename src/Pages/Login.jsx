import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link as LinkChakra,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  let [logInClick, setLogInClick] = useState(false);

  const usuario = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => res.data)
      .then((datos) => {
        dispatch(setUser(datos));
        console.log(datos);
        navigate("/")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div >
              <Link to="/">
      <Button className="boton" ml={10} mt={10} color="orange.500">
      Volver
      </Button>
      </Link>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Iniciar Sesion</Heading>

          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contrase??a</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="********"
                    required
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"orange.400"}
                    color={"white"}
                    _hover={{
                      bg: "orange.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>

    </div>
  );
};

export default Login;
