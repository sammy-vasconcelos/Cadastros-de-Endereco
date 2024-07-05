import React, { useEffect, useState } from "react";
import TextLabel from "../../components/Label";
import Card from "../../components/CardContainer";
import { CardContainer, ContentContainer } from "./style";
import { AdressList } from "../../infra/database";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setData(AdressList)
      }, []); 
    
    const createCard = () => {
       return data.map((element, index) => {
            console.log(element);
            return(
                <>
                    <Card 
                    key={element.id}
                    id={element.id}
                    type={element.tipo} 
                    country={element.pais} 
                    number={element.numero}
                    street={element.rua}
                    state={element.estado}
                    cep={element.cep}
                    neighbor={element.bairro}
                    factory={element.lote}
                    ></Card>
                </>

            );
        })
    }

    return(
        <>
        <ContentContainer>
                <ConfirmButton label={"+ Cadastrar novo endereço"} onClick={() => navigate("register")}/>
                <TextLabel label="Seus endereços:" size="30px" color="#3e2c52"/>
                <CardContainer>
                    {createCard()}
                </CardContainer>
        </ContentContainer>
           
        </>
    );
}