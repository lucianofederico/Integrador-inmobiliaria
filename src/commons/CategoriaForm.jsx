import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../templates/inmuebles.css";
import { setPropiedad } from "../store/propiedades";
import Contacto from "../commons/Contacto";
import axios from "axios";

import {
  Checkbox,
  Box,
  Container,
} from "@chakra-ui/react";

const Categorias = ({arrayCategorias, setArrayCategorias}) => {
    const dispatch = useDispatch();

    
    const [checkedCasa, setCheckedCasa] = useState(false)
    const [checkedDepartamento, setCheckedDepartamento] = useState(false)
    const [checkedTerreno, setCheckedTerreno] = useState(false)
    const [checkedPileta, setCheckedPileta] = useState(false)
    const [checked2ambientes, setChecked2ambientes] = useState(false)
    const [checked3ambientes, setChecked3ambientes] = useState(false)
    const [checked4ambientes, setChecked4ambientes] = useState(false)
    const [checked5ambientes, setChecked5ambientes] = useState(false)

    useEffect(()=>{
        if(checkedCasa){
         setArrayCategorias([...arrayCategorias, "casa"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="casa")
          setArrayCategorias(filtrado)    
        }
      }, [checkedCasa])
    
      
    
    
      useEffect(()=>{
        if(checkedDepartamento){
         setArrayCategorias([...arrayCategorias, "departamento"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="departamento")
          setArrayCategorias(filtrado)    
        }
      }, [checkedDepartamento])
    
    
      useEffect(()=>{
        if(checkedPileta){
         setArrayCategorias([...arrayCategorias, "pileta"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="pileta")
          setArrayCategorias(filtrado)    
        }
      }, [checkedPileta])
    
    
      useEffect(()=>{
        if(checkedTerreno){
         setArrayCategorias([...arrayCategorias, "terreno"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="terreno")
          setArrayCategorias(filtrado)    
        }
      }, [checkedTerreno])
    
      useEffect(()=>{
        if(checked2ambientes){
         setArrayCategorias([...arrayCategorias, "2 ambientes"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="2 ambientes")
          setArrayCategorias(filtrado)    
        }
      }, [checked2ambientes])
    
      useEffect(()=>{
        if(checked3ambientes){
         setArrayCategorias([...arrayCategorias, "3 ambientes"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="3 ambientes")
          setArrayCategorias(filtrado)    
        }
      }, [checked3ambientes])
    
      useEffect(()=>{
        if(checked4ambientes){
         setArrayCategorias([...arrayCategorias, "4 ambientes"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="4 ambientes")
          setArrayCategorias(filtrado)    
        }
      }, [checked4ambientes])
    
      useEffect(()=>{
        if(checked5ambientes){
         setArrayCategorias([...arrayCategorias, "5 ambientes"])
        }
        else{
          const filtrado = arrayCategorias.filter((value)=>value!="5 ambientes")
          setArrayCategorias(filtrado)    
        }
      }, [checked5ambientes])



  return (
    
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

        </Box>
  )
}


export default Categorias