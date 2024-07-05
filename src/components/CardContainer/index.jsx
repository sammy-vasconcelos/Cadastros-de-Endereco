import React from "react";
import TextLabel from "../Label";
import { ButtonContainer, CardContainer, CardContent } from "./style";
import ConfirmButton from "../ConfirmButton";
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate = useNavigate();

    return(
        <>
        <CardContainer key={props.key} id={props.id}>
            <CardContent>
                <TextLabel label={props.type || "tipo"} size="24px" color="#3e2c52" marginbottom="5%" margintop="2%"/>

                <TextLabel label={props.country}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.state}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.neighbor}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.city}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.street}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.number}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.cep}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
                <TextLabel label={props.factory}  size="16px" color="#929293" marginbottom="0px" margintop="0px"/>
            </CardContent>
            
            <ButtonContainer>
                <ConfirmButton label={"Editar"} onClick={() => navigate("/register/" + props.id)}/>
            </ButtonContainer>

        </CardContainer>
           
        </>
    );
}