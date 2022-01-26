import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthProvider"
import { ProductsProvider } from "./ProductsProvider";

interface AppProviderProps {
    children: ReactNode
}

export const Provider = ({ children }: AppProviderProps) => {
    
    return (
        <AuthProvider>
            <ProductsProvider>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}