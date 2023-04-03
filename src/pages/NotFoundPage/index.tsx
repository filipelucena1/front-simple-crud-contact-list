import { StyledNotFound } from "./style";
import notFoundImg from "../../assets/oops.png"
import { Link } from "react-router-dom";

export const NotFound =() => {

    return(
        <StyledNotFound>
            <img src={notFoundImg} alt="Not found image"/>
            <main>
                <span>Error 404 :(</span>
                <h1>Page was not found!</h1>
                <h2>Click <Link to="/">HERE</Link> to comeback our website.</h2>
            </main>
        </StyledNotFound>
    )
}