import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Flex } from '@chakra-ui/react'
import { useProducts } from '../../provider/ProductsProvider';
import { CartCard } from '../CartCard';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {

    const { cart, setCart} = useProducts();



    return ( 
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader bgColor="green.primary" color="white" fontSize="lg" fontWeight="700" >Carrinho de compras</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
            {cart.length < 1 ? (
                <Flex alignItems="center" flexDir="column">
                    <Text mt="10px" fontSize="lg" fontWeight="700" >Sua sacola está vazia</Text>
                    <Text marginY="10px" fontSize="md" fontWeight="400" color="gray.300" >Adicione itens</Text>
                </Flex>) : (
                    cart?.map((product) => {return( <CartCard product={product} />)})
                )}
              
        </ModalBody>
            { cart.length < 1 ? 
            (<></>) : (
                <ModalFooter justifyContent="center" flexDir="column" >
                    <Flex justifyContent="space-between" w="90%" marginTop="10px" borderTopColor="gray.100" borderTopWidth="2px" paddingX="20px" paddingY="10px" >
                        <Text>Total</Text>
                        <Text>{cart.reduce((previousValue, currentValue) => {return previousValue + currentValue.price},0)},00</Text>
                    </Flex>
                    <Button w="90%" bgColor="gray.100" color="gray.300" fontSize="sm" fontWeight="600" padding="0px" onClick={() => setCart([])}>
                    Remover todos
                    </Button>
                </ModalFooter>
                )}
        
      </ModalContent>
    </Modal>
    )
}