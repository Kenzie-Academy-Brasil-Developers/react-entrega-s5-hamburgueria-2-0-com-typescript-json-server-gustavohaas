import { FormControl, Center, InputGroup, Input as ChakraInput, InputProps as ChakraInputProps, InputRightElement } from "@chakra-ui/react"
import { theme } from "../../styles/theme"
import { FaSearch } from "react-icons/fa";

interface InputProps extends ChakraInputProps {
    name: string,
    placeholder?: string
}

export const InputSearch = ({ name, placeholder, ...rest }: InputProps) => {
    return (
        <FormControl>
            <InputGroup flexDirection="column">

                <ChakraInput 
                {...rest} 
                placeholder={placeholder} 
                name={name} 
                _hover={{borderWidth: "2px"}} 
                _placeholder={{color: "gray.100"}} 
                size="lg"
                bg="white"
                h="60px"
                />

                <InputRightElement paddingRight="10px" w="53px" h="40px"> 
                    <Center
                        marginTop="20px"
                        borderRadius="8px"
                        as="button"
                        w="53px"
                        h="40px"
                        fontSize="2xl"
                        bg="green.primary"
                    >
                        <FaSearch color={theme.colors.white} />
                    </Center>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}