import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";


const PropPage = () => {

  const { id } = useParams();

  const [prop, setProp] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/propiedades/prop/${id}`
      )
      .then((prop) => {
       return setProp(prop)
      });
  }, [id]);

  return (
    <Box>
    <div>PropPage</div>
    </Box>
  )
}

export default PropPage