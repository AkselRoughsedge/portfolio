import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import Img1 from '../Images/SecureHive/1.png';
import Img2 from '../Images/SecureHive/2.png';
import Img3 from '../Images/SecureHive/3.png';

import Project from '../comps/Project';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#f5f6fa;
`;

const SmallText = styled.span`
font-size:14px;
`;

const SecureHive_Archive = () => {

    return (
        <Page>
            <Project
                imgHeight="100%"
                padding="20pt"
                imgDirection="column"
                bgcolor="#202638"
                title="Secure Hive Internship"
                subTitle1={"Secure Hive"}
                subTitle2={"Front-End Developer"}
                subTitle3={[<div className="github-link" style={{width:"300pt", justifyContent:"space-between"}}><a color="white" href="https://securehive.ca/" target="_blank" rel="noreferrer">Website Link</a><a href="https://hackerdetector.com/calculator" target="_blank" rel="noreferrer">Data Breach Calculator</a></div>]}
                Section1="Introduction"
                para1={["I had a three-month internship as a Front End Developer at a cyber-security company called Secure Hive, where I got to enhance my development and team work skills. I worked alongside developers and designers in a SCRUM framework where we created multiple webpages and a React Native app. I gained experience working through the design and development process of these products, and became accustomed to the weekly sprints that we would have."]}
                img1={Img2}
                Section2="React Native App"
                para2={["The React Native application was created by following a design and development process. We first planned, created, and tested mock-ups of the app to ensure usability before beginning development. I created low and high-fidelity wireframes to perfect the layout and flow of the app, and applied feedback from my colleagues that would test it. As for the development process, I used Node.js and React Native for the framework, and used Styled Components to maintain clean, reusable code. By working in a SCRUM framework, we were able to complete the project in less than 2 months.", <br />,<SmallText>* Due to a non-disclosure agreement, I am unable to show pictures of the mobile app.</SmallText>]}
                img2={Img3}
                displayPara3="block"
                Section3="Webpages"
                para3={["Similarly to creating the React Native application, my team and I followed a design and development process for creating webpages. The ", <a href="https://hackerdetector.com/calculator" target="_blank" rel="noreferrer">Data Breach Calculator</a>," was first designed using Figma where we created the UI and decided who will create each component. I created components, implemented functionality for the calculator, and enabled a responsive layout using Vue.js."]}
                img3={Img1}
                list={[
                    <li>React js</li>,
                    <li>Vue js</li>,
                    <li>Axios API</li>,
                    <li>Styled Components</li>
                ]}
            ></Project>
            <NavBar header1="header1SecureHive" header2="header2SecureHive" color="#191e2c"></NavBar>
        </Page>
    )
}

export default SecureHive_Archive;