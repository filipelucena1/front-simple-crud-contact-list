import { StyledRegister } from "./style";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        fullName: yup.string().min(5, "FullName must have at least 5 characters").required("FullName is a required field"),
        email: yup.string().required("Email is a required field").email("Invalid email format"),
        phoneNumber: yup.string().required("Phone number is a required field")
          .min(10, "Phone number must have at least 10 numbers")
          .max(11, "Phone number can not have more than 11 numbers"),
        password: yup
          .string()
          .required("Password is a required field")
          .min(8, "Password must contains at least 8 characters")
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contains capital letter, lowercase letter, number and special char"
          )
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
            api.post("/users", data)
            .then((response: any) => {
                if (response.status === 201) {
                    toast.success("succesful, redirecting...", { autoClose: 3000 });
                    navigate("/login");
                }
            })
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong! :(", { autoClose: 3000 });
        }
    };

    return (
        <StyledRegister>
            <h1>Contacts List</h1>
            <h2>Simple CRUD</h2>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <>
                    <input type="text" placeholder="Full name" {...register("fullName")} />
                    {errors.fullName?.message}

                    <input type="email" placeholder="Email" {...register("email")} />
                    {errors.email?.message}

                    <input 
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    />
                    {errors.password?.message}

                    <input type="number" placeholder="Phone Number" {...register("phoneNumber")} />
                    {errors.phoneNumber?.message}

                    <button type="submit">Register</button>
                    <span className="spanJaRegistrado">Already registered?</span>
                    <button onClick={() => navigate("/login")}>Login</button>
                </>
            </form>
        </StyledRegister>
    );
};
