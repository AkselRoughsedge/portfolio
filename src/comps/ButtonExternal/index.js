import React from 'react';
import styled from 'styled-components';

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
display: ${props=>props.hide ? props.hide : "none"};
`;

const ButtonExternal = ({ text, width, link, hide, target }) => {
    return (
        <Cont hide={hide}>
        <a href={link} target={target} rel="noreferrer" style={{ textDecoration: 'none' }}>
    <LogoCont width={width}>
        <LogoBox className="fill">
            {text}
        </LogoBox>
    </LogoCont>
    </a>
    </Cont>
    )
}

ButtonExternal.defaultProps = {
    text: "default text",
    target: "blank_"
}

export default ButtonExternal;