import axios from "axios";
import { createContext, useEffect, useReducer } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Product{
    id: number,
    name: string,
    new_price: number,
    old_price: number,
    category: string,
    image: string,
   available: boolean
}

interface ProductContexts{
    product: Product[]
    dispatch: any
}

export const ProductContext = createContext<ProductContexts | null>(null);

const productReducer = (state: Product[], action: any) => {

    switch (action.type) {
        case "SET_PRODUCT":
            return action.payload
        default:
            return state
    }
}

export const ProductListContextProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(productReducer, [])
    useEffect(()=>{
        const fetchProducts = async () => {
            const products = await axios.get("http://localhost:4000/product/getProduct");
            dispatch({type:"SET_PRODUCT",payload:products.data})
            
        }
        fetchProducts()
        
    },[])
    console.log(state);
    
    return (
        <ProductContext.Provider value={{product: state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}