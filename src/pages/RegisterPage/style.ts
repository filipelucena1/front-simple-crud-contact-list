import styled from "styled-components";

export const StyledRegister = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #80e1ff;
    text-align: center;
    
    h1{
        margin: 4vh;
        font-size: 5vh;
    }
    h2{
        margin-bottom: 3vh;
        font-size: 4vh;
        color: #0851fd;
    }
    form{
        height: 65vh;
        width: 50vw;
        margin: 3vh 0;
        padding: 3vh;
        border: #049dcb solid 2px;
        border-radius: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        font-weight: bold;
        color: #e60000;

        input{
            padding: 1vh;
            border-radius: 5%;
            background-color: whitesmoke;
            font-size: 2.5vh;
            text-align: center;
        }
        button{
            padding: 2vh;
            border-radius: 5%;
            background-color: #0851fd;
            color: whitesmoke;
            font-size: 2.5vh;
            filter: brightness(.85);

            :hover{
                filter: brightness(1)
            }
        }
        span{
            font-size: 2.3vh;
            font-weight: bold;
        }
    }
`