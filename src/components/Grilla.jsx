import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Inmueble from "./Inmueble";
import { setUser } from "../store/user";
import { useSelector } from "react-redux";
import { Grid, GridItem,HStack, Stack} from "@chakra-ui/react";


const Grilla = () => {
  let [propList, setPropList] = useState([]);

  const usuario = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/propiedades/")
      .then((propList) => setPropList(propList.data))
    }, []);

    useEffect(()=>{
      axios
      .get("http://localhost:8080/api/users/me").then((data) => console.log("dataaaaaaaaaaa", data))
      .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      
      <div>
      
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        
        {propList
          ? propList.map((inmueble) => (

              <Inmueble key={inmueble.id} inmueble={inmueble} />
            ))
          : null}
       </Grid> 

      </div>
    </div>
  );
};

export default Grilla;
