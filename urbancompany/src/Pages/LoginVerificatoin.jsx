import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {Text,Box,Button,SimpleGrid,List,Image,Input,Select,Heading} from "@chakra-ui/react"

  import { useDisclosure } from '@chakra-ui/react'
  import React from "react"
import { useState } from "react"
import { PinInput, PinInputField } from '@chakra-ui/react'


export default function LoginVerification() {
    //  alert("hi")
    
    return <Box h="300px" m="auto">
        <Box textAlign="center">
            <Heading>Enter verification code</Heading>
           <br />
            <Text>we have sent you a 4 digit OTP</Text>
            <Text>on 9111111111</Text>
        </Box>
        <Box mt="30px" textAlign="center">
    <PinInput otp>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
     </PinInput>
        </Box>
    
    
    <Box textAlign="center" mt="25px" >

        <Button bg="black" color="white" w="25%">Login</Button>
    </Box>

    </Box>

  
   
       
       
  }