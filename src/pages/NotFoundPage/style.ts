import styled from "styled-components";

export const StyledNotFound = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #80e1ff;
    text-align: center;

    h1{
        font-size: 10vh;
        margin-bottom: 3vh;
    }
    h2{
        font-size: 5vh;
        a{
            color: #00c3ff;
            font-weight: bolder;
            text-decoration: underline;
            :hover{
                color: #008ae6;
            }
        }
    }
    span{
        font-size: 8vh;
        font-weight: 300;
        margin-bottom: 3vh;
    }
`