import styled from "styled-components"

export const MainContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    border: none;
    background-image: linear-gradient(#e0d2fc, #a283be);
`

export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-height: 80%;
    margin: 3%;
    padding-bottom: 3%;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 10px 15px 8px #37373777;
    background-color: white;
`

export const FormInputs = styled.div`
    position: relative;
    display: flex;
    justify-content: center; 
    text-align: left;
    width: 90%;
    height: 56%;
    gap: 5%;
    border: none;
  
`
export const FormSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 90%;
    height: 56%;
`

export const InputsColumns = styled.div`
    position: relative;
    display: flex;
    float: left;
    flex-direction: column;
    width: 25%;
    border: none;
`
export const InputsBig = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
`
