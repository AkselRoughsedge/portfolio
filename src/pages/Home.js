import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../HomeCss.css';

import NavBar from '../comps/NavBarHome';
import Button from '../comps/Button';
import PortfolioItem from '../comps/PortfolioItem';
import Arrow from '../Images/arrow.svg';

import AOS from "aos";
import "aos/dist/aos.css";

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#2A2B2E;
`;

const Content = styled.div`
width:70%;
@media (max-width: 600px) {
    width:90%;
  }
`;

const Link = styled.a`
    text-decoration: none;
    position: relative;
`;

const Span = styled.span`
color:#00B4D8;

:after {
    content: "";
    display: block;
    height: 4px;
    left: 0.1%;
    position: absolute;
    background: #00B4D8;
    transition: width 0.3s 0s, left 0.3s 0s;
    width: 0;
}
:hover:after {
    width: 100%; 
    left: 0;
}
`;

const Intro = styled.div`
width:100%;
height: 100vh;
@media (max-width: 1200px) {
    text-align:center;
    align-items:center;
  }
`;

const IntroBody = styled.div`
flex:2;
color:white;
`;

const Work = styled.div`
height:100vh;
@media (max-width: 1200px) {
height:1100pt;
  }
`;

const WorkTitle = styled.div`
padding-top:150pt;
padding-bottom:50pt;
text-align:center;
color:white;

`;

const WorkContent = styled.div`
padding-top:25pt;
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width: 1200px) {
    padding-top:0pt;
    flex-direction:column;
  }
`;

const IntroTop = styled.div`
align-items:center;
display:flex;
width:100%;
height: 100vh;
`;

const IntroBottom = styled.div`
display:flex;
justify-content:center;
`;

const IntroAnchor = styled.div`
position:relative;
bottom:100pt;
height:45pt;
width:45pt;
box-sizing: border-box;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
border:2px solid white;
display:flex;
align-items:center;
justify-content:center;
transition:bottom 0.3s, padding-top 0.3s;

:hover{
padding-top:5pt;
bottom:95pt;
border:3px solid white;
}
`;

const Image = styled.img`
height:25pt;
`;

const Home = () => {
    var shadow = {
        filter: "drop-shadow(0px 0px 15px rgba(0, 180, 216,0.2))"
    }

    useEffect(()=>{
        AOS.init({
            duration : 2000
          });
    },[])

    return (
        <div>
            <Page>
                <Content>
                    <Intro>
                        <IntroTop>
                            <IntroBody className="big-text">
                                <p class="fadeIn1">Hi, my name is <Link href="https://www.linkedin.com/in/akselr/"><Span>Aksel</Span></Link>.<br/> I'm a Web Developer.</p>
                            </IntroBody>
                            <div className="Art fadeIn2">
                                <div style={shadow} class="circle1"></div>
                                <div style={shadow} class="circle2"></div>
                                <div style={shadow} class="circle3"></div>
                                <div style={shadow} class="circle4"></div>
                                <div style={shadow} class="circle5"></div>
                            </div>
                        </IntroTop>
                        <IntroBottom>
                            <a href="/#projects">
                                <IntroAnchor className="fadeIn3">
                                    <Image src={Arrow}></Image>
                                </IntroAnchor>
                            </a>
                        </IntroBottom>
                    </Intro>
                    <Work>
                            <WorkTitle id="projects" className="big-text" data-aos="fade-up" data-aos-duration="1000">
                                <p>Projects</p>
                            </WorkTitle>
                            <WorkContent>
                                <PortfolioItem link="/noot" title="Noot" text="A back-to-school app designed to help children return to school during the pandemic."></PortfolioItem>
                                <PortfolioItem link="/show-tracker" title="Show Tracker" text="An app for keeping track of what movies and TV shows you've seen."></PortfolioItem>
                                <PortfolioItem link="/lightbulb" title="Lightbulb"  text="A social media app catered to developers and designers."></PortfolioItem>
                            </WorkContent>
                    </Work>
                </Content>
                <NavBar></NavBar>
            </Page>
        </div>
    )
}

export default Home;