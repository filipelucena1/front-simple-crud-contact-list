import { StyledUserProfile } from "./style";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { UserContext } from "../../contexts";
import { useContext } from "react";

export const UserPage = () => {
    const navigate = useNavigate();
    const { user, setUser} = useContext(UserContext);

    const formSchema = yup.object().shape({
        fullName: yup.string().notRequired().min(5, "FullName must have at least 5 characters"),
        email: yup.string().notRequired().email("Invalid email format"),
        phoneNumber: yup.string().notRequired()
          .min(10, "Phone number must have at least 10 numbers")
          .max(11, "Phone number can not have more than 11 numbers"),
        password: yup.string().notRequired()
      });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const token = localStorage.getItem("simple_CRUD_token");
    const userId = localStorage.getItem("simple_CRUD_Id");

    const onSubmitFunction: SubmitHandler<FieldValues> = async (data) => {
        try {
            const updatedUser = {
                fullName: data.fullName !== "" ? data.fullName : user?.fullName,
                phoneNumber: data.phoneNumber !== "" ? data.phoneNumber : user?.phoneNumber,
                email: data.email !== "" ? data.email : user?.email,
                password: data.password !== "" ? data.password : null
            };
            if (!updatedUser.password){
                delete updatedUser.password;
            };
            const response = await api.patch(`users/${userId}`, updatedUser, {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            });
            toast.success("succesful!", { autoClose: 3000 });
            setUser(response.data);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong! :(", { autoClose: 3000 });
        }
    };

    return (
        <StyledUserProfile>
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
                <h1>User Profile <span>Edit</span></h1>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <>
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" type="text" placeholder={user?.fullName} defaultValue={user?.fullName} {...register("fullName")} />
                        {errors.fullName?.message}

                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder={user?.email} defaultValue={user?.email} {...register("email")} />
                        {errors.email?.message}

                        <label htmlFor="password">Password</label>
                        <input 
                        id="password"
                        type="password"
                        placeholder="New Password Here"
                        required={false}
                        {...register("password")}
                        />
                        {errors.password?.message}

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" type="number" placeholder={user?.phoneNumber} defaultValue={user?.phoneNumber} {...register("phoneNumber")} />
                        {errors.phoneNumber?.message}

                        <button type="submit">Save</button>
                        <button className="delete" onClick={async () => {
                            await api.delete(`/users/${user?.id}`, {
                                headers: {
                                Authorization: `Bearer ${token}`,
                                },
                            });
                            toast.success("Account was deleted!", {autoClose: 2300})
                            localStorage.removeItem("simple_CRUD_token");
                            localStorage.removeItem("simple_CRUD_Id");
                            navigate("/")
                        }}>Delete Account</button>
                    </>
                </form>
            </main>
        </StyledUserProfile>
    );
};
