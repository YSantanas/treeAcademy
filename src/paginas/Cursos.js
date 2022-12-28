

import { NavLink } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  CardBody,
  Card,
  Stack,
  Text,
  Button,
  CardFooter,
  Grid,
  GridItem
} from "@chakra-ui/react";

const gridStyle = {
  width: '15%',
  textAlign: 'center',
  margin: '2px',
  
  background: '#ECF6FF'
};



const Cursos = () => {
  return (
    <ChakraProvider>
    <div
      className="container mt-2 mb-3"
      
    >
       <h1 className="text-center text-dark py-3">Cátalogo</h1>
     




  <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid>

    </div>
    </ChakraProvider>
  );
};

export default Cursos;
