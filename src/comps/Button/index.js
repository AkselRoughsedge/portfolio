import React from 'react';
import styled from 'styled-components';

import {
    Link
  } from "react-router-dom";

const LogoBox = styled.span`
padding-top:5pt;
padding-bottom:5pt;
padding-left:10pt;
padding-right:10pt;
text-align: center;
`;

const LogoCont = styled.div`
color:white;
font-size:24px;
width:${props=>props.width ? props.width : "100%"};
display:flex;
align-items:center;
`;

const Cont = styled.div`
display:flex;
align-items:center;

`;

const Button = ({ text, width, link }) => {
    return (
        <Cont>
        <Link to={link} style={{ textDecoration: 'none' }}>
    <LogoCont width={width}>
        <LogoBox className="fill">
            {text}
        </LogoBox>
    </LogoCont>
    </Link>
    </Cont>
    )
}

Button.defaultProps = {
    text: "default text"
}

export default Button;