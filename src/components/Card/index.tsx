import { Flex, Image, Center, VStack, Text, Button } from "@chakra-ui/react"
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

export const Card = ({ product }: ProductsProp) => {

    const { addCart } = useProducts();

    return(
        <Flex 
        w="300px"
        h="346px"
        flexDir="column"
        borderColor="gray.100"
        borderRadius="5px"
        borderWidth="2px"
        key={product.id}
        _hover={{borderColor:"green.primary"}}
        marginTop="20px"
        >
            <Center bgColor="gray.0" w="100%">
                <Image src={product.img} w="177px" h="177px" bgColor="gray.0" />
            </Center>
            <VStack paddingLeft="20px" marginTop="10px" alignItems="flex-start">
            <Text fontSize="lg" fontWeight="700" >{product.name}</Text>
            <Text paddingTop="5px" fontSize="xs" color="gray.300" >{product.category}</Text>
            <Text paddingTop="5px" fontSize="sm" color="green.primary" fontWeight="600" >R$ {product.price},00</Text>
            <Button 
                w="106px" 
                h="40px" 
                bgColor="gray.200" 
                _hover={{bgColor:"green.primary"}} 
                color="white" 
                onClick={() => addCart(product)}
            >Adicionar</Button>
            </VStack>
        </Flex>
    )
}