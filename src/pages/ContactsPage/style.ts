import styled from "styled-components";

export const StyledContacts = styled.div`
    width: 100vw;
    min-height: 100vh;
    
    header{
        padding: 4vh 5vw;
        display: flex;
        justify-content: space-between;

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
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #80e1ff;
        text-align: center;

        h1{
            height: : 20%;
        }
        ul{
            height: 80%;
            overflow-y: auto;

            li{ 
                height: 25%;
                width: 50vw;
                margin-top: 4vh;
                padding: 3vh;
                display: flex;
                justify-content: space-between;
                list-style: none;
                border-radius: 5%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                
                div:first-child{
                    width: 90%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    h4{
                        font-size: 3vh
                    }
                    h5{
                        font-size: 2.7vh;
                    }
                    p{
                        font-weight: bold;
                    }
                }
                div:last-child{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                button{
                    background-color: #0080ff;
                    color: whitesmoke;
                    padding: 3px;
                    font-size: 9px
                    font-weight: bold;
                    border-radius: 8%;
                    filter: brightness(.85);

                    :hover{
                        filter: brightness(1);
                    }
                }
                
                .remove{
                    background-color: #936c6c;
                    color: whitesmoke;
                    padding: 3px;
                    font-size: 14px
                    font-weight: bold;
                    border-radius: 8%;
                    filter: brightness(.85);
                }
            }
            h2{
                margin-top: 20vh;
            }
        }
        button{
            margin: 10px 0 0 10px;
            background-color: #ffcc00;
            color: black;
            padding: 3vh 3.5vh;
            font-size: 3vh;
            font-weight: bold;
            border-radius: 8%;
            filter: brightness(.85);

            :hover{
                filter: brightness(1);
            }
        }
    }
`