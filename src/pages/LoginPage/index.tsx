import { StyledLogin, StyledToast } from "./style";

import {  useNavigate } from "react-router-dom";

import api from "../../services/api";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { UserContext, iApiError, iUser } from "../../contexts";
import { useContext } from "react";



export const LoginPage = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup.string().required("Email is a required field"),
        password: yup.string().required("Password is a required field"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const { setUser} = useContext(UserContext);

    const onSubmitFunction: SubmitHandler<FieldValues> = async (data) => {
        try {
            localStorage.removeItem("simple_CRUD_token");
            localStorage.removeItem("simple_CRUD_Id");
            const response = await api.post<{token: string, user: iUser}>("/login", data);
            toast.success("Successful login!", { autoClose: 2300 });
            localStorage.setItem(
                "simple_CRUD_token",
                `${response.data.token}`
            );
            localStorage.setItem(
                "simple_CRUD_Id",
                `${response.data.user.id}`
            );
            setUser(response.data.user);
            navigate("/dashboard", {replace: true});
        } catch (error) {
            const AxiosErrors = error as AxiosError<iApiError>
            console.log(AxiosErrors.response?.data.message);
            toast.error(`${AxiosErrors.response?.data.message}`, { autoClose: 2300 });
        }
    };

    return (
        <StyledLogin>
            <h1>Contacts List</h1>
            <h2>Simple CRUD</h2>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <>
                    <input type="email" placeholder="Email" {...register("email")} />
                    {errors.email?.message}
                    
                    <input 
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    />
                    {errors.password?.message}

                    <button className="form-button" type="submit">Login</button>
                    <span className="spanJaRegistrado">Not registered yet?</span>
                    <button className="form-button" onClick={() => navigate("/register")}>Register</button>
                    <StyledToast/>
                </>
            </form>
        </StyledLogin>
    );
};
