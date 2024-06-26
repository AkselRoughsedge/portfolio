import {React,useState} from 'react';
import styled from 'styled-components';

import arrow from '../../Images/arrow.svg';

import {
    Link
  } from "react-router-dom";


const Container = styled.div`
display:"flex";
`;

const Cont = styled.div`
right:0pt;
overflow:hidden;
position:absolute;
top:70pt;
height:${props=>props.height ? props.height : "0pt"};
transition:0.3s;
width:113pt;
background-color:${props=>props.color ? props.color : "#191e2c"};
display:flex;
flex-direction:column;
align-items:center;
display:${props=>props.display ? props.display : "none"};
`;

const Span1 = styled.span`
position:relative;

color:White;
cursor: pointer;
padding:5pt;

right:30pt;

:after {
    bottom:0pt;
    content: "";
    display: block;
    height: 2px;
    left: 4.9%;
    position: absolute;
    background: white;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 120%;
    left: 4.9%;
}
`;

const Span2 = styled.span`

:after {
    top:30pt;
    content: "";
    display: block;
    height: 1px;
    left: 8.8%;
    position: absolute;
    background: white;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 48%;
    left: 8.8%;
}
`;

const Span3 = styled.span`

:after {
    top:62pt;
    content: "";
    display: block;
    height: 1px;
    left: 8.8%;
    position: absolute;
    background: white;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 52%;
    left: 8.8%;
}
`;

const Span4 = styled.span`

:after {
    top:97pt;
    content: "";
    display: block;
    height: 1px;
    left: 8.8%;
    position: absolute;
    background: white;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 57%;
    left: 8.8%;
}
`;

const Span5 = styled.span`

:after {
    top:132pt;
    content: "";
    display: block;
    height: 1px;
    left: 8.8%;
    position: absolute;
    background: white;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 26%;
    left: 8.8%;
}
`;

const Portfolio = styled.div`
width:100%;
height:70pt;
display:flex;
align-items:center;
justify-content:center;
`;

const Text = styled.p`
transition:color 0.3s;
color:white;
padding-left:10pt;
padding-right:10pt;
padding-bottom:10pt;
padding-top:10pt;
margin-top:0pt;
margin-bottom:0pt;
font-size:12pt;
`

const Arrow = styled.img`
position:relative;
left:83pt;
top:1pt;
transition:0.3s;
height:20pt;
transform:${props=>props.rotate ? props.rotate : "rotate(180deg)"};
`;

const Dropdown = ({ color }) => {

    const [myDropdown, setDropdown] = useState("none")
    const [myHeight, setHeight] = useState("0pt")
    const [myRotate, setRotate] = useState("rotate(180deg)")

    function HandleDropdown() {
  if (myDropdown === "none") {
    setRotate("rotate(0deg)")
    setDropdown("block")
    setTimeout(function(){ setHeight("140pt"); }, 1);
  } else {
    setRotate("rotate(180deg)")
    setHeight("0pt")
    setTimeout(function(){ setDropdown("none"); }, 300);
  }
}

    return (
        <Container>
            <Portfolio className='h3-w-montserrat'>
                <Arrow rotate={myRotate} src={arrow}>
                </Arrow>
                <Span1 onClick={HandleDropdown}>
                    My Work
                </Span1>
            </Portfolio>
            <Cont display={myDropdown} height={myHeight} color={color}>
                <Link to={"/stayshure"} style={{ textDecoration: 'none' }}>
                <Span2>
                    <Text>
                        Stayshure
                    </Text>
                </Span2>
                </Link>
                <Link to={"/0footprint"} style={{ textDecoration: 'none' }}>
                <Span3>
                    <Text>
                        0Footprint
                    </Text>
                </Span3>
                </Link>
                <Link to={"/secure-hive"} style={{ textDecoration: 'none' }}>
                <Span4>
                    <Text>
                        Secure Hive
                    </Text>
                </Span4>
                </Link>
                <Link to={"/bcit"} style={{ textDecoration: 'none' }}>
                <Span5>
                    <Text>
                        BCIT
                    </Text>
                </Span5>
                </Link>
            </Cont>
        </Container>
    )
}

export default Dropdown;