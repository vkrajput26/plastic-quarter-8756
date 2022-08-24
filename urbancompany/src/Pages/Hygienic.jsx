import {Box,Button,SimpleGrid,List,Image,Text,Heading,Select} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Navbar from "../Common/Navbar"
export default  function Hygienic(){

    return(
        <SimpleGrid bg="black" color="white">
            <Navbar/>
            <Box h="550px"  display="flex">
                <Box w="50%">
                    <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" alt="image" />
                </Box>
                <Box w="50%">
                        <Box   w="90%" mt="10%" >
                            <Text w="40%" fontWeight="400" fontSize="22px">URBAN COMPANY</Text>                 
                            <br />
                            <Heading ml="20px">Quality home services, on demand</Heading>
                            <br />
                            <Text fontSize="18px">Experienced,hand-picked Professionals to serve you at your doorstep</Text>
                          
                            <Box ml="20px" bg="white" color="black" w="60%" border="1px" h="120px" mt="15px">
                                <Text mt="8px" mb="8px">Where do you need a service?</Text>
                                <Select placeholder='Select your city'>
                                    <option value='option1'><Link to="#">Agra</Link></option>
                                    <option value='option2'><Link to="#">Delhi</Link></option>
                                    <option value='option3'><Link to="#">Pune</Link></option>
                                </Select>
                            </Box>
                        </Box>
                </Box>
            </Box>
        </SimpleGrid>
    )
 
}