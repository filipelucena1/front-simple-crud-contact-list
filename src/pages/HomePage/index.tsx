import { StyledHomePage } from "./style";
import userImg from "../../assets/user1.png"
import mailImg from "../../assets/mail1.png"
import phoneImg from "../../assets/phone1.png"
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <StyledHomePage>
            <h1>Welcome to the Contacts List!</h1>
            <figure>
                <img src={userImg} alt="user icon" />
                <img src={mailImg} alt="mail icon" />
                <img src={phoneImg} alt="phone icon" />
            </figure>
            <h2>The most simple and efficient place to save your contacts list.</h2>
            <Link to="login">Get Start</Link>
        </StyledHomePage>
    )
}