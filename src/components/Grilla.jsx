import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Inmueble from "./Inmueble";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";
import { setUser } from "../store/user";
import { useDispatch } from "react-redux";
import { setPropiedad } from "../store/propiedades";


const Grilla = ({grilla}) => {

  const dispatch = useDispatch();

  const propiedad = useSelector((state) => state.propiedad);

  useEffect(() => {
    axios
      .get("/api/propiedades/")
      .then((propiedad) => dispatch(setPropiedad(propiedad.data)))
    }, []);

    useEffect(()=>{
      axios
      .get("/api/users/me")      .then((res) => res.data)
      .then((datos) => {
        dispatch(setUser(datos));
        console.log(datos);
      })
      .catch((err) => console.log(err));
    }, []);


  return (
    <div>
      
      <div ref={grilla}>
      
      <Grid pt={5} templateColumns='repeat(3, 1fr)' gap={6} mb={10}>
        
        {propiedad
          ? propiedad.map((inmueble) => (

              <Inmueble key={inmueble.id} inmueble={inmueble} />
            ))
          : null}
       </Grid> 

      </div>
    </div>
  );
};

export default Grilla;
