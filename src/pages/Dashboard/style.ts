import styled from "styled-components";

export const StyledDashboard = styled.div`
    width: 100vw;
    min-height: 100vh;
    
    header{
        padding: 4vh 5vw;
        display: flex;
        justify-content: flex-end;

        button{
            margin: 10px 0 0 10px;
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
        justify-content: center;
        background-color: #80e1ff;
        text-align: center;
        
        h1{
            margin: 8vh 2vw;
            font-size: 5vh;
            color: #0851fd;
        }
        h2{
            width: 60vw;
            margin: 5vh 2vw 7vh 2vw;
            font-size: 3.5vh;

            span{
                color: #0851fd;
            }
        }
        button, a{
            margin: 10px 0 0 10px;
            background-color: #0080ff;
            color: whitesmoke;
            padding: 3vh 3.5vh;
            font-size: 3vh;
            font-weight: bold;
            border-radius: 8%;
            filter: brightness(.85);

            :hover{
                filter: brightness(1);
            }
        }
        a{
            background-color: #ffcc00;
            color: black;
        }
        #contacts{
            background-color: #0851fd;
            color: whitesmoke;
        } 
    }
`