import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button } from '@chakra-ui/react'


const Logout = () => {
  const usuario = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("http://localhost:8080/api/users/logout")
      .then(() => dispatch(setUser({})))

      .then(console.log("deslog", usuario))
      navigate("/")

  };

  return (
    <div>
       <Button className="boton" size='md' onClick={logout}>
      Logout
      </Button>
    </div>
  );
};

export default Logout;
