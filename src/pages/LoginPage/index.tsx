import { StyledLogin } from "./style";

import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { ILogin } from "../../interfaces/login";

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

    const onSubmitFunction: SubmitHandler<FieldValues> = async (data) => {
        try {            
            api.post("/login", data). then((response) => {
                toast.success("Logado com sucesso!", { autoClose: 3000 });
                window.localStorage.setItem(
                    "simple_CRUD_token",
                    `${response.data.accessToken}`
                );
                window.localStorage.setItem(
                    "simple_CRUD_Id",
                    `${response.data.user.id}`
                );
            })
        } catch (error) {
            console.log(error);
            toast.error("Incorrect Email or Password", { autoClose: 3000 });
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

                    <button type="submit">Login</button>
                    <span className="spanJaRegistrado">Not registered yet?</span>
                    <button onClick={() => navigate("/register")}>Register</button>
                </>
            </form>
        </StyledLogin>
    );
};
