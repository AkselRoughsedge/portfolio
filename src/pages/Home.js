import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../HomeCss.css';

import NavBar from '../comps/NavBar';
import PortfolioItem from '../comps/PortfolioItem';
import Arrow from '../Images/arrow.svg';
import Me from '../Images/circleme.png';
import Github from '../Images/github.png';
import LinkedIn from '../Images/linkedin.png';
import Email from '../Images/email.png';

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../comps/Footer';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
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
height:80vh;
@media (max-width: 1200px) {
height:850pt;
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
justify-content:space-around;
@media (max-width: 1200px) {
    padding-top:0px;
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

const ProfileImg = styled.img`
height:175pt;
padding-left: 50pt;
@media (max-width: 900px) {
    padding-left:0pt;
  }
  `;

const About = styled.div`
display:flex;
text-align:left;
align-items:center;
@media (max-width: 900px) {
    flex-direction:column;
  }
`;

const Home = () => {
    var shadow = {
        filter: "drop-shadow(0px 0px 15px rgba(0, 180, 216,0.2))"
    }

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    return (
        <div>
            <Page>
                <Content>
                    <Intro>
                        <IntroTop>
                            <IntroBody className="big-text">
                                <h1 class="fadeIn1, h1-w-montserrat">Hi, my name is <Link href="https://www.linkedin.com/in/akselr/"><Span>Aksel</Span></Link>.<br /> I'm a Front-End Developer.</h1>
                                <PortfolioItem link="/stayshure" ButtonMode={"0px"} External={"block"} Main={"none"} target={"_self"} width={"fit-content"} ExternalText={"My Work at Stayshure"}></PortfolioItem>
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
                            <a href="/#aboutme">
                                <IntroAnchor className="fadeIn3">
                                    <Image src={Arrow}></Image>
                                </IntroAnchor>
                            </a>
                        </IntroBottom>
                    </Intro>
                    <WorkTitle id="aboutme">
                        <About data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <h2 className="h2-w-montserrat" style={{marginBottom:'8px'}}>About me</h2>
                                <p className="p-w-opensans" style={{marginBottom:'32px'}}>A Front-End Developer with a drive for creating innovative, high-quality products. Experienced with web/app development, and working in team projects. Dedicated and always eager to learn more.</p>
                                <a href="https://github.com/AkselRoughsedge" target="_blank" rel="noreferrer"><img alt="GitHub Icon" className="github-img-big" src={Github}></img></a>
                                <a href="https://www.linkedin.com/in/akselr/" target="_blank" rel="noreferrer"><img alt="LinkedIn Icon" className="github-img-big" src={LinkedIn}></img></a>
                                <a href="mailto:roughsedge.a@gmail.com" target="_blank" rel="noreferrer"><img alt="Email Icon" className="github-img-big" src={Email}></img></a>
                            </div>
                            <ProfileImg src={Me}></ProfileImg>
                        </About>
                    </WorkTitle>
                    <Work>
                        <WorkTitle id="projects" className="big-text" data-aos="fade-up" data-aos-duration="1000">
                            <h2 className='h2-w-montserrat'>My Work</h2>
                        </WorkTitle>
                        <WorkContent>
                            <PortfolioItem link="/stayshure" title="Stayshure" text="Senior Product Developer"></PortfolioItem>
                            <PortfolioItem link="/0footprint" title="0Footprint" text="Front-end Developer"></PortfolioItem>
                            <PortfolioItem link="/secure-hive" title="Secure Hive" text="Front-end Developer Intern"></PortfolioItem>
                        </WorkContent>
                    </Work>
                </Content>
                <NavBar header1="header1" header2="header2" color="#191e2c"></NavBar>
            </Page>
            <Footer display={"none"}></Footer>
        </div>
    )
}

export default Home;