import React from 'react';
import styled from 'styled-components';

import PortfolioItem from '../comps/PortfolioItem';
import NavBar from '../comps/NavBar';
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

const Work = styled.div`
height:100vh;
@media (max-width: 1200px) {
height:1300pt;
  }
`;

const WorkTitle = styled.div`
padding-top:150pt;
padding-bottom:50pt;
text-align:center;
color:white;

`;

const WorkContent = styled.div`
padding-top:50pt;
display:flex;
align-items:center;
justify-content:space-around;
@media (max-width: 1200px) {
    padding-top:50pt;
    flex-direction:column;
  }
`;

const BCIT = () => {
    return (
        <div>
        <Page>
            <Content>
                <Work>
                    <WorkTitle id="projects" className="big-text" data-aos="fade-up" data-aos-duration="1000">
                        <p style={{margin:"0"}}>Older Projects</p>
                        <p className="small-text">Here are a few of the projects I completed while in the Digital Design and Development program at BCIT.</p>
                        <hr></hr>
                    </WorkTitle>
                    <WorkContent>
                        <PortfolioItem link="/noot" title="Noot" text="A back-to-school app designed to help children return to school during the pandemic."></PortfolioItem>
                        <PortfolioItem link="/show-tracker" title="Show Tracker" text="An app for keeping track of what movies and TV shows you've seen."></PortfolioItem>
                        <PortfolioItem link="/lightbulb" title="Lightbulb"  text="A social media app catered to developers and designers."></PortfolioItem>
                    </WorkContent>
                </Work>
            </Content>
            <NavBar header1="header1" header2="header2" color="#191e2c"></NavBar>
        </Page>
        <Footer display={"none"}></Footer>
</div>
    )
}

export default BCIT;