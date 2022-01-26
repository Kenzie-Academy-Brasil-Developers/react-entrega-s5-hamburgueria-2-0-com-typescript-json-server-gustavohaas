import { createContext, useContext, ReactNode, useCallback, useState } from "react";
import { api } from "../services/api";

interface ProductsContextData {

    getProducts: (accessToken: string) => void;
    products: Products[];
    addCart: (product : Products) => void;
    cart: Products[];
    setCart: ([]) => void;
    removeCart: (itemId: string) => void;
}

interface ProductsProviderProps {

    children: ReactNode
}

interface Products {
    id: string,
    name: string,
    category: string,
    price: number,
    img: string
}

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

const useProducts = () => {
    
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts must be used within an ProductsProvider");
      }
    
      return context;
};

const ProductsProvider = ({children}: ProductsProviderProps) => {

    const [products, setProducts] = useState<Products[]>([])
    const [ cart, setCart ] = useState<Products[]>([])

    const addCart = useCallback((product : Products) => {
        setCart([...cart, product])
        console.log(cart)
    },[cart])

    const removeCart = useCallback((itemId: string) => {
        const filteredCart = cart.filter((item) => item.id !== itemId)
        setCart(filteredCart)
    },[cart])

    const getProducts = useCallback(async (accessToken: string) => {
        try {
            const response = await api.get("/products", {
                headers: {
                Authorization: `Bearer ${accessToken}`,
            }
            });
            setProducts(response.data);
        } catch (err) {
            console.log(err)
        }
    },[])

    return (
        <ProductsContext.Provider value={{getProducts, products, addCart, cart, setCart, removeCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export { useProducts, ProductsProvider }