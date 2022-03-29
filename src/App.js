import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import { Box } from "@chakra-ui/react";
import Formulario from "./Pages/Formulario";
import PropPage from "./components/PropPage";

const App = () => {
  return (

      <Box background="linear-gradient(90deg, rgba(195,200,232,1) 0%, rgba(116,116,133,1) 50%, rgba(195,200,232,1) 100%)" p={10}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Formulario />} />
        <Route path="/propiedades/:id" element={<PropPage />}/>
      </Routes>
      </Box>
  );
};

export default App;


//linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);