import { FormControl, FormLabel, InputGroup, InputLeftElement, Input as ChakraInput, InputProps as ChakraInputProps, Text } from "@chakra-ui/react"
import { useState, useEffect, useCallback, ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
    name: string,
    error?: boolean,
    label?: string,
    placeholder?: string,
    helperText?: string
}

type inputVariationOptions = {
    [key: string]: string;
}

const inputVariation: inputVariationOptions = {
    error: "red.negative",
    default: "gray.800",
    filled: "green.success"
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, placeholder, label, error = null, helperText , ...rest },
    ref
    ) => {
    const [variation, setVariation] = useState("default")
    const [value, setValue] = useState("");
        

    useEffect(() => {
        if (error) {
            return setVariation("error")
        }
    },[error]);

    const handleInputBlur = useCallback(() => {
        if (value.length > 1 && !error) {
          return setVariation("filled");
        }
      }, [error, value]);

    return (
        <FormControl>
            <InputGroup flexDirection="column">
                {!!label && (
                    <InputLeftElement mt="-4" ml="3.5"> <FormLabel bgColor="white" fontSize="xs" padding="2px" paddingBottom="0px">{label}</FormLabel> </InputLeftElement>
                )}

                <ChakraInput 
                {...rest} 
                placeholder={placeholder} 
                name={name} 
                onChangeCapture={(e) => setValue(e.currentTarget.value)}
                bg="gray.0" 
                borderColor={inputVariation[variation]} 
                onBlurCapture={handleInputBlur}
                _hover={{borderWidth: "2px"}} 
                _focus={{bg:"white"}} 
                _placeholder={{color: "gray_800"}} 
                size="lg"
                ref={ref} />
            
                {!!error && <Text fontSize="xs" ml="5px" color="gray.300" >{helperText}</Text>}
            </InputGroup>
        </FormControl>
    )
};

export const Input = forwardRef(InputBase);