import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFound } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { UserPage } from "../pages/UserPage";
import { ContactsPage } from "../pages/ContactsPage";

const MainRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/dashboard/user" element={<UserPage/>}/>
      <Route path="/dashboard/contacts" element={<ContactsPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
);

export default MainRoutes;