import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import Img1 from "../Images/Noot/bulletin.png";
import Img2 from '../Images/Noot/health-check.png'

import Project from '../comps/Project';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#f5f6fa;
`;

const Noot = () => {

    return (
        <Page>
           <Project 
           bgcolor="#202638"
           title="Noot"
           subTitle1={"BCIT"}
           subTitle2={"Front-End Developer"}
           para1={["In my third semester at BCIT, we were instructed to create an app that would solve a problem within a specific community as our semester-long project. Three teammates and I decided to create a back-to-school app that helps children return to school safely.",<br/>,<br/>,"Teachers can create ‘classrooms’ within the app that require a special code to join. The teacher gives this special code to their students, who then enter it when creating an account on Noot. Students can see the teachers bulletin posts, answer a daily health checklist, and read information about Covid-19 on the app."]}
           img1={Img1}
           para2={["As one of the Front-End Developers in the team, I was responsible for building components and pages. I was also responsible for creating functionalities such as form selections and button animations. Once the app’s main pages were complete, I helped my team connect the Front-End to the backend using RESTful APIs and routed pages to the navigation bar.",<br/>,<br/>,"We chose to use React Native for this project to gain experience with the framework. We also used Lottie Animations for loading screens just to try something new."]}
           img2={Img2}
           list={[<li>React Native</li>,<li>React Navigation</li>, <li>Axios API</li>, <li>Lottie Animations</li>]}
           />
           <NavBar header1="header1Noot" header2="header2Noot" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Noot;