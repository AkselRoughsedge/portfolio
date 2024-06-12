import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import ButtonExternal from '../ButtonExternal';

const Cont = styled.div`
background-color:none;
padding:${props=>props.hide ? props.hide : "20pt"};
width:${props=>props.width ? props.width : "300pt"};
  @media (max-width: 1200px) {
    width:90%;
  }
`;

const Title = styled.div`
text-align:center;
padding-bottom:${props=>props.hide ? props.hide : "20pt"};
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
margin-bottom:${props=>props.hide ? props.hide : "20px"};
height:50pt;

margin-top:0px;
height:${props=>props.hide ? props.hide : "50pt"};
`;

const PortfolioItem = ({ text, title, link, ButtonMode, External, Main, width, ExternalText, target }) => {
    return (
        <Cont data-aos="fade-up" data-aos-duration="1000" hide={ButtonMode} width={width}>
            <Title className='h3-w-montserrat' hide={ButtonMode}>
                {title}
            </Title>
            <Body>
                <Content>
                    <Text className='p-w-opensans' hide={ButtonMode}>{text}</Text>
                    <Button link={link} text="Learn More" hide={Main}></Button>
                    <ButtonExternal target={target} hide={External} link={link} text={ExternalText}></ButtonExternal>
                </Content>
            </Body>
        </Cont>
    )
}

PortfolioItem.defaultProps = {
    title:"",
    text: "",
    target: "_blank"
}

export default PortfolioItem;