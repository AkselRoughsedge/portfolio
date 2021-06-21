import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

import AOS from "aos";
import "aos/dist/aos.css";

const Cont = styled.div`
width:300pt;
@media (max-width: 1770px) {
    width:280pt;
  }
  @media (max-width: 1670px) {
    width:260pt;
  }
@media (max-width: 1570px) {
    width:240pt;
  }
  @media (max-width: 1450px) {
    width:220pt;
  }
  @media (max-width: 1320px) {
    width:200pt;
  }
  @media (max-width: 1200px) {
    width:100%;
    margin-bottom:80pt;
  }
  @media (max-width: 900px) {
    width:90%;
    margin-bottom:100pt;
  }
`;

const Title = styled.div`
font-family: 'Lato', sans-serif;
color:white;
font-size:28px;
text-align:center;
padding-bottom:20pt;
`;

const Body = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const Content = styled.div`
color:white;
display:flex;
flex-direction:column;
transition:0.3s;
justify-content:center;
align-items:center;
text-align:center;
`;

const Text = styled.p`
margin-bottom:20px;
height:50pt;
`;

const PortfolioItem = ({ text, title, link }) => {
    return (
        <Cont data-aos="fade-up" data-aos-duration="1000">
            <Title>
                {title}
            </Title>
            <Body>
                <Content>
                    <Text>{text}</Text>
                    <Button width="150pt" link={link} text="LEARN MORE"></Button>
                </Content>
            </Body>
        </Cont>
    )
}

PortfolioItem.defaultProps = {
    title:"default title",
    text: "default text"
}

export default PortfolioItem;