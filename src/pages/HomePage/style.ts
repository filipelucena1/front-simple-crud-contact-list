import styled from "styled-components";

export const StyledHomePage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #80e1ff;
    text-align: center;
    
    h1{
        margin: 10vh 2vw;
        font-size: 5vh;
        color: #0851fd;
    }
    h2{
        width: 60vw;
        margin: 5vh 2vw;
        font-size: 3.5vh;
    }
    figure{
        height: 20vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        
        img{
            max-width: 20vw;
        }
    }
    button{
        margin-top: 2vh;
        background-color: #ff9900;
        color: black;
        padding: 3vh 3.5vh;
        font-size: 3vh;
        font-weight: bold;
        border-radius: 5%;
        filter: brightness(.85);

        :hover{
            filter: brightness(1);
            color: #0851fd;
        }
    }
    
`