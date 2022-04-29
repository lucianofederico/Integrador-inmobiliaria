// import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import axios from "axios";
import { useNavigate } from "react-router";
import { Heading, Box } from "@chakra-ui/react";

// const Register = () => {
//   const isLoged = useSelector((state) => state.user);

//   const dispatch = useDispatch();

//   const navigate = useNavigate ()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let obj= {name: e.target.name.value,
//     surname: e.target.surname.value,
//     email: e.target.email.value,
//     password: e.target.password.value,
//     phoneNumber: e.target.phoneNumber.value,
//     direction: e.target.direction.value}
//     axios
//       .post("/api/users/register", obj)
//       .then(()=>{
//         axios
//         .post("/api/users/login", {email:e.target.email.value, password:e.target.password.value})
//         .then(res=> res.data)
//         .then (datos=>{
//           dispatch (setUser (datos))
//           console.log(datos)
//           navigate ("/")
//         })
//         .catch((err)=>console.log(err))
//       })
//       .catch((err) => console.log(err));

//   };

//   return (
//     <div>
//       Inciar sesion
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre
//           <input
//
//             type="text"
//             name="name"
//             placeholder="nombre"
//             required
//           />
//         </label>
//         <label>
//           Apellido
//           <input
//
//             type="text"
//             name="surname"
//             placeholder="apellido"
//             required
//           />
//         </label>
//         <label>
//           Email
//           <input
//
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//           />
//         </label>
//         <label>
//           Contraseña
//           <input
//
//             type="password"
//             name="password"
//             placeholder="***"
//             required
//           />
//         </label>
//         <label>
//           Direction
//           <input
//
//             type="text"
//             name="direction"
//             placeholder="Direccion"
//             required
//           />
//           <label>
//             Telefono
//             <input
//
//               type="text"
//               name="phoneNumber"
//               placeholder="Telefono"
//               required
//             />
//           </label>
//         </label>
//         <button type="submit"> Registrarse </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { Formik } from "formik";

const Register = () => {
  const isLoged = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phoneNumber: e.target.phoneNumber.value,
      direction: e.target.direction.value,
    };
    axios
      .post("/api/users/register", obj)
      .then(() => {
        axios
          .post("/api/users/login", {
            email: e.target.email.value,
            password: e.target.password.value,
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
  };

  return (
    <div>
      <Link to="/">Volver</Link>
      <Box>Holaaaaa</Box>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "La direccion de email no es correcta";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (

          <form onSubmit={handleSubmite}>
            <label>
              Nombre
              <input type="text" name="name" placeholder="nombre" required />
            </label>
            <label>
              Apellido
              <input
                type="text"
                name="surname"
                placeholder="apellido"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </label>
            <label>
              Contraseña
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </label>
            <label>
              Direccion
              <input
                type="text"
                name="direction"
                placeholder="Direccion"
                required
              />
            </label>
            <label>
              Telefono
              <input
                type="text"
                name="phoneNumber"
                placeholder="Telefono"
                required
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
