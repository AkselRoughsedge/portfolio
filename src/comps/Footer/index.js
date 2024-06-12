import React from "react";
import styled from "styled-components";

const Container = styled.div`
height:100pt;
width:100%;
background-color:${props=>props.color ? props.color : "#191e2c"};
display:${props=>props.display ? props.display : "flex"};
align-items:center;
justify-content:space-around;
overflow:hidden;
position:absolute;
@media (max-width: 1200px) {
    flex-direction:column;
    height:150pt;
    padding-top:10pt;
    padding-bottom:10pt;
  }
`;

const FooterItem = styled.div`
width:200pt;
text-align:center;
color:white;
`;

const Footer = ({display}) => {
    return (
    <Container display={display}>
        <FooterItem><a href="https://www.linkedin.com/in/akselr/" target="_blank" rel="noreferrer">LinkedIn</a></FooterItem>
        <FooterItem><a href="https://github.com/AkselRoughsedge" target="_blank" rel="noreferrer">GitHub</a></FooterItem>
        <FooterItem><a href="mailto:roughsedge.a@gmail.com">roughsedge.a@gmail.com</a></FooterItem>
    </Container>
    )
}

export default Footer;