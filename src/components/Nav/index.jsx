import { ArrowImg, ContentContainer, LogoContainer, NavContainer } from "./style";
import Arrow from "./../../assets/left.png"
import Planet from "./../../assets/pluto.png"
import TextLabel from "../Label";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    return(
        <>
            <NavContainer>
                <ContentContainer>
                    <ArrowImg src={Arrow} onClick={() => navigate("/")}></ArrowImg>

                    <LogoContainer>
                        <ArrowImg src={Planet}></ArrowImg>
                        <TextLabel color="#3e2c52" label="Martelivery" size="30px" marginbottom="0px" margintop="0px"/>
                    </LogoContainer>
                </ContentContainer>

            </NavContainer>
        </>
    );
}