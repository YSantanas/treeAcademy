import { ChakraProvider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {
  Box,
  SimpleGrid,
  Center,
  Heading
} from "@chakra-ui/react";

const Cursos = () => {
  return (
    
    <div className="container mt-2 mb-3">
<Center>
<Heading fontSize='50px'  h='100px' color='black'>Cátalogo
</Heading>
</Center>

      <ChakraProvider>
        <SimpleGrid
          bg="blue.50"
          columns={{ sm: 2, md: 4 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.500"
        >
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a'  color='blue.400' href='./CursosComputacion'  fontWeight='bold'>
            Ingenieria
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Derecho
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Psicologia
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Odontologia
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Medicina
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Veterinaria
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Filosofia
          </Box>

          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Dark lg
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Outline
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white" as='a' color='blue.400' href='#'  fontWeight='bold'>
            Inner
          </Box>
        </SimpleGrid>
      </ChakraProvider>
    </div>
  );
};

export default Cursos;
