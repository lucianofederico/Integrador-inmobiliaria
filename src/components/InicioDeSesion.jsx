import React from 'react'
import { useNavigate, Link } from "react-router-dom";


const InicioDeSesion = () => {
  return (
    <div>
      Inciar sesion
      <form >
      <label>
          Nombre
          <input
            className="sesion"
            type="text"
            name="name"
            placeholder="nombre"
            required
          />
        </label>
        <label>
          Apellido
          <input
            className="sesion"
            type="text"
            name="surname"
            placeholder="apellido"
            required
          />
        </label>
        <label>
          Email
          <input
            className="sesion"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          Contraseña
          <input
            className="sesion"
            type="password"
            name="password"
            placeholder="***"
            required
          />
        </label>
        <label>
          Direction
          <input
            className="sesion"
            type="text"
            name="direction"
            placeholder="Direccion"
            required
          />
                  <label>
          Telefono
          <input
            className="sesion"
            type="text"
            name="phoneNumbre"
            placeholder="Telefono"
            required
          />
        </label>
        </label>
        <button type="submit"> Iniciar sesion</button>
      </form>
    </div>
  )
}

export default InicioDeSesion
