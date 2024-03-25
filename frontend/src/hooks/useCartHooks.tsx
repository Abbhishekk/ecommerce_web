import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("Cart Context must be used inside an AuthContextProvider")
    }
    return context;
}