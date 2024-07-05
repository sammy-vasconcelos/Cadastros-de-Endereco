import styled from "styled-components"

export const Input = styled.input`
    position: relative;
    width: 100%;
    height: 6vh;
    padding: 0px 2% ;
    outline: none;
    color: #5e2e6e;
    border: none;
    border-bottom: 2px solid #a45ebc;
    font-size: 16px;
    font-weight: 300;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 15px 0px #37373777;
    &::placeholder{
        color: #aca8a8;
    }
`