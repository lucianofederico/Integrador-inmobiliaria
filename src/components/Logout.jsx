import React from "react";
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
      .post("/api/users/logout")
      .then(() => dispatch(setUser(null)))
      .then(console.log("deslog", usuario))
      navigate("/")

  };

  return (
    <div>
       <Button className="boton" size='md' onClick={logout} color="orange.500">
      Logout
      </Button>
    </div>
  );
};

export default Logout;
