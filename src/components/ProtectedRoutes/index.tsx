import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts";


export default function ProtectedRoutes(){
    const {user} = useContext(UserContext)

    return user ? <Outlet/> : <Navigate to={"/"} replace/>
}