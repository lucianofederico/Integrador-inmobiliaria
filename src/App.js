import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Box } from "@chakra-ui/react";
import Formulario from "./Pages/Formulario";
import PropPage from "./components/PropPage";
import { useSelector } from "react-redux";
import Admin from "./Pages/Admin";
import CrearProp from "./components/CrearProp";

const App = () => {

  const isLoged = useSelector( state => state.user )

  return (

      <Box background="#F4E04D" > 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Formulario />} />
        <Route path="/propiedades/:id" element={<PropPage />}/>

      {isLoged ? isLoged.admin ? <> 
        <Route path="/administrador" element={<Admin/>} />
        <Route path="/addprop" element={<CrearProp />}/>
         </>
          : null : null}  
          
      </Routes>
      </Box>
  );
};

export default App;

