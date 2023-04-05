import { StyledContacts } from "./style";
import userImg from "../../assets/user1.png"
import mailImg from "../../assets/mail1.png"
import phoneImg from "../../assets/phone1.png"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext, iApiError } from "../../contexts";
import api from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { url } from "inspector";

export const ContactsPage = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([])
    const { user, setUser, open, setOpen} = useContext(UserContext);

    useEffect(() => {
        async function getUserContacts(){
            const token = localStorage.getItem("simple_CRUD_token");
            const userId = localStorage.getItem("simple_CRUD_Id");
            
            if (token){
                try {                    
                    api.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await api.get(`/contacts`);

                    setContacts(data);
                } catch (error) {
                    const AxiosErrors = error as AxiosError<iApiError>
                    console.log(AxiosErrors);
                    toast.error("Oops, something went wrong! :(", {autoClose: 2300});
                }
            }            
        }
        getUserContacts();
    }, [])

    return (
        <StyledContacts>
            <header>
                <button onClick={() => navigate("/dashboard")}>Back</button>
                <button onClick={() => {
                    localStorage.removeItem("simple_CRUD_token");
                    localStorage.removeItem("simple_CRUD_Id");
                    navigate("/login");
                    setUser(null);
                }}>Logout</button>
            </header>
            <main>
                <h1>Contacts List!</h1>
                <ul>
                    {
                    contacts.length > 0? (
                        contacts.map((contact: any)=> 
                            <li key={contact.id}>
                                <div>
                                    <h4>{contact.fullName}</h4>
                                    <h5>{contact.email}</h5>
                                    <p>{contact.phoneNumber}</p>
                                </div>
                                <div>
                                    <button onClick={async () => {
                                        await api.delete(`/contacts/${contact.id}`).catch((error) => {
                                            console.log(error)
                                        })
                                        setContacts((prevState) => {
                                            return prevState.filter((item: any) => item.id !== contact.id)
                                        })
                                        setUser((prevState: any) => {
                                            return {
                                            ...prevState,
                                            contactsCount: prevState?.contactsCount - 1
                                        }})
                                    }} className="remove">X</button>
                                    <button onClick={() => {}}>Edit</button>
                                </div>
                            </li>
                        )
                        ) : (
                        <h2>No Contact already was registered in your account.</h2>
                        )
                    }
                </ul>
                <button onClick={() => setOpen(!open)}>{!open ? "New Contact" : "Add Contact"}</button>
            </main>
            
        </StyledContacts>
    )
}