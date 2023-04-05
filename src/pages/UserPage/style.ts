import styled from "styled-components";

export const StyledUserProfile = styled.div`
    width: 100%;
    min-height: 100vh;
    
    header{
        padding: 4vh 5vw;
        display: flex;
        justify-content: space-between;

        button{
            background-color: #ffcc00;
            color: black;
            padding: 2vh 2.5vh;
            font-size: 2vh;
            font-weight: bold;
            border-radius: 8%;
            filter: brightness(.85);

            :hover{
                filter: brightness(1);
            }
        }
    }
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #80e1ff;
        text-align: center;
        
        h1{
            margin: 4vh;
            font-size: 5vh;

            span{
                color: #0851fd;
            }
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

            label{
                text-align: left;
            }

            input{
                padding: 1vh;
                border-radius: 5%;
                background-color: whitesmoke;
                font-size: 2.5vh;
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
        }
    }
`