/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useReducer } from "react"

interface User{
    firstName: string,
    lastName: string,
    email: string,
    refreshToken: string,
    accessToken: string
    avatar: string
    role: string
}

interface authUser{
    user: User
    dispatch: any
}

export const UserAuthContext =createContext<authUser | null>(null);

const userAuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state
    }
}

export const UserAuthContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(userAuthReducer, {user: null});
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            dispatch({type: "LOGIN", payload: JSON.parse(user)})
        }
    },[])
    console.log(state);
    
    return (
        <UserAuthContext.Provider value={{user: state.user, dispatch}}>
            {children}
        </UserAuthContext.Provider>
    )
}

