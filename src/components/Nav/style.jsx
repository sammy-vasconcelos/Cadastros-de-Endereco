import styled from "styled-components"

export const NavContainer = styled.div`
    position: relative;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: #ffffffe8;
    box-shadow: 0px 4px 15px 0px #37373777;
`

export const ContentContainer = styled.div`
    position: relative;
    width: 57%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5%;
`

export const ArrowImg = styled.img`
    position: relative;
    width: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;
`