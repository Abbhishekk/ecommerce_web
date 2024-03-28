import { useContext } from "react";
import { UserAuthContext } from "../context/userAuthContext";

export const useAuthContext = () => {
    const context = useContext(UserAuthContext);
    if(!context){
        throw new Error("useAuthContext must be used inside an AuthContextProvider")
    }
    return context;
}