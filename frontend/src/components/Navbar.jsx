import { Container, Flex, Text, HStack, Button, useColorMode  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { PlusSquareIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Container maxW={"1140px"} px={4}>
    <Flex
      h={16}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={{ base: "column", sm: "row" }}
    >
     <Text
      bgGradient='linear(to-r, cyan.400, blue.500)'
      bgClip='text'
      fontSize={ { base: "22", sm: "28" }}
      fontWeight='bold'
      textTransform={{ base: "uppercase"} }
      textAlign={{ base: "center"}}
      >
        <Link to="/">Product store 🛒</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
        <Link to="/create">
          <Button>
            <PlusSquareIcon fontSize={22}/>
          </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon /> : <LuSun size="20"/>}  
        </Button>
      </HStack>
    </Flex>
  </Container>
}
export default Navbar
