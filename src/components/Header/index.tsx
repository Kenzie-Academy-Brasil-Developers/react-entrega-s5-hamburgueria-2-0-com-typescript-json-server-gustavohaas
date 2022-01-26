import { Flex, Text, Center, Box } from "@chakra-ui/react"
import { SearchBar } from "../SearchBar"
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi"
import { useProducts } from "../../provider/ProductsProvider";

interface HeaderProps {
    modal: () => void;
}

export const Header = ({ modal }: HeaderProps) => {

    const { cart } = useProducts();

    return (
        <Flex bgColor="gray.0" alignItems="center" >
            <Flex 
            alignItems="center" 
            paddingLeft="7.5%"
            w="100%"
            h="100px"
            bgColor="gray.0"
            >
                <Text fontSize="2xl" fontWeight="bold" paddingRight="5px">Burger</Text>
                <Text fontSize="lg" fontWeight="bold" color="red.secundary">Kenzie</Text>
            </Flex>

            <SearchBar />

            <Center
                borderRadius="8px"
                as="button"
                w="53px"
                h="40px"
                fontSize="2xl"
                marginRight="30px"
                marginLeft="15px"
                onClick={() => modal()}
            >
                <FaShoppingCart color="gray"/>
                <Box bg="green.primary" w="14px" h="14px" mt="-5" ml="-1.5" borderRadius="3px" fontSize="10px" color="white" fontWeight="bold" > {cart.length} </Box>
            </Center>
            
            <Center
                borderRadius="8px"
                as="button"
                w="53px"
                h="40px"
                fontSize="2xl"
                marginRight="8%"
            >
                <FiLogOut color="gray"/>
            </Center>
        </Flex>
    )
}