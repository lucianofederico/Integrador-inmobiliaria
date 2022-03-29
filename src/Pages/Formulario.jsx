import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../templates/inmuebles.css"
import { Button, Heading } from "@chakra-ui/react";

function Formulario() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
    <Link to="/">
      <Button className="boton" mb={10}>
      Volver
      </Button>
      <Heading fontSize={"4xl"} ml={10}>Registrate</Heading>
      </Link>
      <Formik
        initialValues={{
          name: "",
          email: "",
          surname: "",
          phoneNumber: "",
          direction: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.password) {
            errores.password = "Por favor ingresa una contraseña";
          } else if (
            valores.password.length <8
          ) {
            errores.password =
              "La contraseña debe tener mínimo 8 caracteres";
          }

          //validacion correo
          if (!valores.email) {
            errores.email = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          if (!valores.name) {
            errores.name = "Por favor ingresa un  nombre";
          }
          if (!valores.surname) {
            errores.surname = "Por favor ingresa un  apellido";
          }
          if (!valores.direction) {
            errores.direction = "Por favor ingresa una direccion";
          }
          if (!valores.phoneNumber) {
            errores.phoneNumber = "Por favor ingresa un numero de telefono";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          let obj = {
            name: valores.name,
            surname: valores.surname,
            email: valores.email,
            password: valores.password,
            phoneNumber: valores.phoneNumber,
            direction: valores.direction,
          };
          axios
            .post("http://localhost:8080/api/users/register", obj)
            .then(() => {
              axios
                .post("http://localhost:8080/api/users/login", {
                  email: valores.email,
                  password: valores.password,
                })
                .then((res) => res.data)
                .then((datos) => {
                  dispatch(setUser(datos));
                  console.log(datos);
                  navigate("/");
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }}
      >
        {({ errors }) => (
          <Form >
            <div className="formRegister" >
              <label htmlFor="email" className="formRegister">Correo</label>
              <Field
              
                type="text"
                name="email"
                id="email"
                placeholder="correo@gmail.com"
              />
              <ErrorMessage
                name="email"
                component={() => <div>{errors.email}</div>}
              />
            </div>
            <div className="formRegister">
              <label htmlFor="password" className="formRegister">Contraseña</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component={() => <div>{errors.password}</div>}
              />
            </div>
            <div className="formRegister">
              <label htmlFor="name" className="formRegister">Nombre</label>
              <Field type="text" name="name" id="name" placeholder="Nombre" />
              <ErrorMessage
                name="name"
                component={() => <div>{errors.name}</div>}
              />
            </div>
            <div className="formRegister">
              <label htmlFor="surname" className="formRegister">Apellido</label>
              <Field
                type="text"
                name="surname"
                id="surname"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="surname"
                component={() => <div>{errors.surname}</div>}
              />
            </div>
            <div className="formRegister">
              <label htmlFor="direction" className="formRegister">Direccion</label>
              <Field
                type="text"
                name="direction"
                id="direction"
                placeholder="Direccion"
              />
              <ErrorMessage
                name="direction"
                component={() => <div>{errors.direction}</div>}
              />
            </div>
            <div className="formRegister">
              <label htmlFor="phoneNumber" className="formRegister">Telefono</label>
              <Field
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Telefono"
              />
              <ErrorMessage
                name="phoneNumber"
                component={() => <div>{errors.phoneNumber}</div>}
              />
            </div>
            <Button className="boton" mt={10}>
            <button type="submit" > <strong>Enviar</strong></button>
            </Button>

          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formulario;
