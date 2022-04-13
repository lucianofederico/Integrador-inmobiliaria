import React, { useEffect, useState, useRef } from "react";
import Grilla from "../components/Grilla";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";
import "../templates/inmuebles.css";
import { useDispatch } from "react-redux";
import { setPropiedad } from "../store/propiedades";
import Contacto from "../commons/Contacto";
import axios from "axios";

import {
  Input,
  Checkbox,
  Center,
  Box,
  Button,
  Container,
} from "@chakra-ui/react";



const Home = () => {
  const dispatch = useDispatch();

  const isLoged = useSelector((state) => state.user);

  const grilla = useRef(null)

  const [arrayCategorias, setArrayCategorias] = useState ([])

  const [checkedCasa, setCheckedCasa] = useState(false)
  const [checkedDepartamento, setCheckedDepartamento] = useState(false)
  const [checkedTerreno, setCheckedTerreno] = useState(false)
  const [checkedPileta, setCheckedPileta] = useState(false)
  const [checked2ambientes, setChecked2ambientes] = useState(false)
  const [checked3ambientes, setChecked3ambientes] = useState(false)
  const [checked4ambientes, setChecked4ambientes] = useState(false)
  const [checked5ambientes, setChecked5ambientes] = useState(false)




 const handleSubmit = (e) => {
    e.preventDefault()
     axios
     .post("/api/propiedades/buscador",{
      busqueda: e.target.busqueda.value,
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .then((datos) => {
      console.log(datos);
      e.target.busqueda.value = ""
      grilla.current.scrollIntoView()
    })
     .catch(err =>console.log(err))
  }


  useEffect(()=>{
    if(checkedCasa){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "casa"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "casa"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="casa")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checkedCasa])

  


  useEffect(()=>{
    if(checkedDepartamento){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "departamento"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "departamento"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="departamento")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checkedDepartamento])


  useEffect(()=>{
    if(checkedPileta){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "pileta"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "pileta"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="pileta")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checkedPileta])


  useEffect(()=>{
    if(checkedTerreno){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "terreno"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "terreno"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="terreno")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checkedTerreno])

  useEffect(()=>{
    if(checked2ambientes){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "2 ambientes"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "2 ambientes"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="2 ambientes")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checked2ambientes])

  useEffect(()=>{
    if(checked3ambientes){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "3 ambientes"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "3 ambientes"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="3 ambientes")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checked3ambientes])

  useEffect(()=>{
    if(checked4ambientes){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "4 ambientes"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "4 ambientes"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="4 ambientes")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checked4ambientes])

  useEffect(()=>{
    if(checked5ambientes){
    axios
     .post("/api/propiedades/categoria",{
      categoria: [...arrayCategorias, "5 ambientes"],
     })
     .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
     .catch(err =>console.log(err))
     setArrayCategorias([...arrayCategorias, "5 ambientes"])
    }
    else{
      const filtrado = arrayCategorias.filter((value)=>value!="5 ambientes")
      axios
      .post("/api/propiedades/categoria",{
       categoria: filtrado
      })
      .then ((propiedad) => dispatch(setPropiedad(propiedad.data)))
      .catch(err =>console.log(err))
      setArrayCategorias(filtrado)    
    }
  }, [checked5ambientes])


  return (
    <div>
      <Box backgroundRepeat="no-repeat" backgroundImage="https://www.vilaprop.com.ar/img/slider/01.jpg" height={800} backgroundPosition="center 0">
    

      <Box display="flex" padding={5} justifyContent="flex-end">
        <Container fontSize={30} color="orange.500">
          {isLoged ? <h1>Hola {isLoged.name}! </h1> : null}{" "}
        </Container>

        {!isLoged ? (
          <Box margin={5}>
            <Link to="/login">
              <Button className="boton" size="md" color="orange.500">
                Login
              </Button>
            </Link>
          </Box>
        ) : null}
        
        <Box margin={5}>
        {!isLoged ?(
          <Link to="/register">
            <Button className="boton" size="md" color="orange.500" mr={10}>
              Registrarse
            </Button>
          </Link>
          ) : null}
          {isLoged ? (
            isLoged.admin ? (
              <Link to="/administrador">
                <Button ml={3} color="orange.500" >Admin</Button>
              </Link>
            ) : null
          ) : null}
        </Box>
        {isLoged ? (
          <Box margin={5}>
            <Logout />
          </Box>
        ) : null}
      </Box>
      <Box mt={50} backgroundColor="blackAlpha.500">
        <Center>
          <Box display="flex" mb={20} mt={90}>
            <Container   color="tomato" fontSize={50} className="probando">
            Encontrá la propiedad de tus sueños
            </Container>


            
          <form onSubmit={handleSubmit} className="busqueda">
         
              <Input
              name="busqueda"
              height={70}
                width={500}
                color="tomato"
                placeholder="Buscar por nombre"
                _placeholder={{ opacity: 0.9, color: "#F39237" }}
              />

            <Button mr={10} type="submit" className="boton" marginLeft={5} size="lg" color="orange.500" height={70}>
              Buscar
            </Button>

              </form>
         



          </Box>
        </Center>
      </Box>
      </Box>
      <Box display="flex">
        <Box ml={10}>
          <Box marginTop={100} fontWeight="bold" fontSize={30} color="orange.600" className="probando">
            {" "}
            Categorias
          </Box>

           <Box >
            <Checkbox onChange={()=>setCheckedCasa(!checkedCasa)}  colorScheme="orange" >
            <Container fontSize={20} className="probando">Casa</Container></Checkbox>
          </Box>


          {/* <Box >
            <Checkbox onChange={(e) => setCheckedItems(e.target.value)}  colorScheme="orange" value="casa">
            Casa</Checkbox>
          </Box> */}

          <Checkbox onChange={()=>setCheckedDepartamento(!checkedDepartamento)} colorScheme="orange"><Container fontSize={20} className="probando">Departamento</Container></Checkbox>

          {/* <Checkbox checked={check}  onChange={()=> setCheck(!check)} colorScheme="orange">Departamento</Checkbox>
          {check?"prendido":"apagado"} */}
          <br />
          <Checkbox onChange={()=>setCheckedTerreno(!checkedTerreno)} colorScheme="orange"><Container fontSize={20} className="probando">Terreno</Container></Checkbox>
          <br />
          <Checkbox onChange={()=>setCheckedPileta(!checkedPileta)} colorScheme="orange"><Container fontSize={20} className="probando">Piscina</Container></Checkbox>
          <br />
          <Checkbox onChange={()=>setChecked2ambientes(!checked2ambientes)} colorScheme="orange"><Container fontSize={20} className="probando">2 ambientes</Container></Checkbox>
          <br />
          <Checkbox onChange={()=>setChecked3ambientes(!checked3ambientes)} colorScheme="orange"><Container fontSize={20} className="probando">3 ambientes</Container></Checkbox>
          <br />
          <Checkbox onChange={()=>setChecked4ambientes(!checked4ambientes)} colorScheme="orange"><Container fontSize={20} className="probando">4 ambientes</Container></Checkbox>
          <br />
          <Checkbox onChange={()=>setChecked5ambientes(!checked5ambientes)} colorScheme="orange"><Container fontSize={20} className="probando">5 ambientes</Container></Checkbox>
          <Box>
            <Box mt={40}>
              <Contacto />
            </Box>
          </Box>
        </Box>

        <Grilla grilla={grilla}/>

      </Box>
    </div>
  );
};

export default Home;
