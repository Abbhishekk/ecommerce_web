import { useAuthContext } from "./useAuthContext"

const useLogout = () => {
    const {dispatch} = useAuthContext();
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("refreshtoken");
        localStorage.removeItem("accesstoken");
        dispatch({type: "LOGOUT"})
    }
    return logout
}

export default useLogout
