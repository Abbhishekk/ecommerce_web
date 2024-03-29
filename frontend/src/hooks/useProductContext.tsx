import { useContext } from "react";

import { ProductContext } from "../context/ProductList";


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("ProductContext must be used inside an AuthContextProvider")
    }
    return context;
}