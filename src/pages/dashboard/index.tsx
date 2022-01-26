import { Grid, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { CartModal } from "../../components/Modal"
import { useAuth } from "../../provider/AuthProvider"
import { useProducts } from "../../provider/ProductsProvider"

export const Dashboard = () => {

    const { products, getProducts } = useProducts();
    const { accessToken } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getProducts(accessToken)
    },[])

    return (
        <>
            <CartModal isOpen={isOpen} onClose={onClose} />
            <Header modal={onOpen} />
            <Grid
            w="100%"
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={2}
            paddingX={["50px", "50px" , "50px" , "50px" ,"200px"]}
            mt="5"
            >
                {products?.map((product) =>{return( <Card product={product}/>)})}
            </Grid>
        </>
    )
}