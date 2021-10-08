import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvidor"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;