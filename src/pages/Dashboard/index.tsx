import { useContext } from "react";
import { UserContext } from "../../contexts";
import { StyledDashboard } from "./style";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    const { user, setUser} = useContext(UserContext);
    return (
        <StyledDashboard>
            <header>
                <button onClick={() => {
                    localStorage.removeItem("simple_CRUD_token");
                    localStorage.removeItem("simple_CRUD_Id");
                    navigate("/login");
                    setUser(null);
                }}>Logout</button>
            </header>
            <main>
                <h1>Hello, {user?.fullName}!</h1>
                <h2>At the moment, you have <span>{user?.contactsCount}</span> registered contacts in your account.</h2>
                <div>
                    <Link to="contacts" id="contacts">Contacts</Link>
                    <button onClick={() => navigate("/login")}>New Contact</button>
                </div>
                <Link to="user">Edit Profile</Link>
            </main>
        </StyledDashboard>
    )
}