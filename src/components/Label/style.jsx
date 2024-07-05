import React from "react"
import styled from "styled-components"

export const Label = styled.p`
    position: relative;
    color: ${(props) => props.color || "#864d99"};
    font-size: ${(props) => props.size || "16px"};
    font-weight: ${(props) => props.weight || "600"};
    margin-bottom: ${(props) => props.marginbottom || "5px"};
    margin-top: ${(props) => props.margintop || "20px"};

`