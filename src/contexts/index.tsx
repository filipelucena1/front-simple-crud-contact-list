import { AxiosError } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api from "../services/api";

export interface iApiError{
    error:      string
    message:    string
}
export interface iChildren{
    children: React.ReactNode
}
export interface iUser{    
    id:            string | null
    phoneNumber:   string
    fullName:      string
    email:         string
    contactsCount: number
}
export interface iContact{
    id:           string
    fullName:     string
    phoneNumber:  string
    email:        string
    createdAt:    string
    updatedAt:    string
}
export interface iWorks{
    title:       string
    deploy_url:  string
    description: string
}
export interface iLogin{
    email: string
    password: string
}
export interface iRegister extends iLogin{
    phoneNumber:  string
    fullName:     string
}
interface iUserContext{
    user:           iUser | null, 
    setUser:        React.Dispatch<React.SetStateAction<iUser | null>>, 
    loading:        boolean, 
    setLoading:     React.Dispatch<React.SetStateAction<boolean>>, 
    open:           boolean, 
    setOpen:        React.Dispatch<React.SetStateAction<boolean>>,
}

export const UserContext = createContext({} as iUserContext);

export default function UserProvider( {children}:iChildren){
    const navigate = useNavigate();
    const [user, setUser] = useState<iUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function getProfileResponse(){
            const token = localStorage.getItem("simple_CRUD_token");
            const userId = localStorage.getItem("simple_CRUD_Id");
            
            if (token){
                try {                    
                    api.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await api.get<iUser>(`/users/${userId}`);

                    setUser(data);
                } catch (error) {
                    const AxiosErrors = error as AxiosError<iApiError>
                    localStorage.removeItem("simple_CRUD_token");
                    localStorage.removeItem("simple_CRUD_Id");
                    setUser(null);
                    console.log(AxiosErrors);
                    toast.error("Oops, something went wrong! :(", {autoClose: 2300});
                }
            }            
        }
        getProfileResponse();
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, loading, setLoading, open, setOpen}}>
            {children}
        </UserContext.Provider>
    );
};