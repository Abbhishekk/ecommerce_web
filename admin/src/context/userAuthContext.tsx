/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useReducer } from "react"

interface User{
    firstName: string,
    lastName: string,
    email: string,
    
    avatar: string
    role: string
}

interface authUser{
    user: User,
    refreshToken: string,
    accessToken: string,
    dispatch: any
}

export const UserAuthContext =createContext<authUser | null>(null);

const userAuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken
            }
        case "LOGOUT":
            return {
                user: null,
                accessToken: "",
                refreshToken: ""
            }
        default:
            return state
    }
}

export const UserAuthContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(userAuthReducer, {user: null});
    useEffect(() => {
        const user = localStorage.getItem("user");
        const accessToken = localStorage.getItem("accesstoken");
        const refreshToken = localStorage.getItem("refreshtoken");
        if (user) {
            dispatch({type: "LOGIN", payload: JSON.parse(user), accessToken: accessToken, refreshToken: refreshToken})
        }
    },[])
 
    console.log(state);
    
    return (
        <UserAuthContext.Provider value={{user: state.user, accessToken: state.accessToken, refreshToken: state.refreshToken, dispatch}}>
            {children}
        </UserAuthContext.Provider>
    )
}

