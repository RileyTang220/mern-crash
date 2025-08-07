import { Container, VStack, Box, Heading, useColorModeValue, useToast, Input, Button } from '@chakra-ui/react';
import React from 'react'
import { useProductStore } from '../store/product.js';

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: '',
    image: ''
  });

  const toast = useToast();

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if(!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setNewProduct({ name: '', price: '', image: '' }); // Reset form
    }
  }

  return <Container maxW={'container.sm'}>
    <VStack spacing={8} >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create a new product
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder="name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <Input
            placeholder="price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Input
            placeholder="image"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
            Create Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}
export default CreatePage
