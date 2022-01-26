import { Flex, Text, Image, Box } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"
import { useProducts } from "../../provider/ProductsProvider";

interface Product {
    id: string,
    name: string,
    category: string,
    price: number,
    img: string
}

interface ProductsProp {
    product: Product
}

export const CartCard = ({ product }: ProductsProp) => {

    const { removeCart } = useProducts();

    return(
        <Flex w="400px" paddingBottom="10px" key={product.id} >
            <Image src={product.img} w="82px" h="80px" bgColor="gray.100" borderRadius="5px" />
            <Flex flexDir="column" >
                <Text fontSize="lg" fontWeight="700" marginLeft="10px" w="130px" >{product.name}</Text>
                <Flex marginLeft="10px" flexDir="row" marginTop="10px" >
                    <Box as="button" w="30px" h="30px" bgColor="gray.100" borderRadius="2px" color="red.secundary" >-</Box>
                    <Text w="40px" h="30px" textAlign="center" fontSize="xs" paddingTop="5px" borderColor="gray.100" borderWidth="1px" >1</Text>
                    <Box as="button" w="30px" h="30px" bgColor="gray.100" borderRadius="2px" color="red.secundary" >+</Box>
                </Flex>
            </Flex>
            <Box as="button" marginLeft="140px" marginBottom="50px" onClick={() => removeCart(product.id)} >
                <FaTrash />
            </Box>
        </Flex>
    )
}