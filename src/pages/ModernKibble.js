import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import Img1 from '../Images/Kibble/1.png';
import Img2 from '../Images/Kibble/2.png';

import Project from '../comps/Project';
import Button from '../comps/Button';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const Kibble = () => {

    return (
        <Page>
            <Project
                imgHeight="100%"
                padding="20pt"
                imgDirection="column"
                bgcolor="#6e655b"
                title="Modern Kibble"
                subTitle1={"Techies of Tomorrow"}
                subTitle2={"Front-End Developer"}
                subTitle3={[<div className="github-link"><a color="white" href="https://book.modernkibble.ca/" target="_blank" rel="noreferrer">Website Link</a></div>]}
                para1={["I was hired by Techies of Tomorrow as a freelance Front End Developer to help create a pet food website for a client. The client asked for a website with a modern look that was capable of processing and viewing orders. I worked alongside another developer who focused on the back-end, while I focused on the front-end."]}
                img1={Img2}
                para2={["I first began designing the website using Figma, where I focused on creating a UI that was easily usable and accessible. After I determined the look of the pages, I began developing the front end using React and Next.js. I used Next Routing for routing pages, and styled components for creating reusable components. I also used Axios for RESTful API calls to the back-end and stored JSON web tokens to verify the user was logged in. An admin dashboard was also created to allow the client to view orders that have been placed."]}
                img2={Img1}
                list={[
                    <li>React js</li>,
                    <li>Next js</li>,
                    <Button width="150pt" link="/" text="LEARN MORE"></Button>,
                    <li>Axios API</li>,
                    <li>Styled Components</li>
                ]}
            ></Project>
            <NavBar header1="header1Kibble" header2="header2Kibble" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Kibble;