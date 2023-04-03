import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFound } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";

const MainRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/dashboard" element={<div/>}/>
      <Route path="/user" element={<div/>}/>
      <Route path="/contacts" element={<div/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
);

export default MainRoutes;