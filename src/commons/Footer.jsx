import React from 'react'
import { Box } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
         <Box bg="black" color="white" textAlign="center" p={10}> 
       Proyecto inmobiliaria - Luciano Federico 
       Argentina

       <Box>
       <EmailIcon/> lucianoafederico@gmail.com
       </Box>
     </Box>
  )
}

export default Footer