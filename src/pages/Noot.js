import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBarNoot';

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
           bgcolor="#d49b28"
           title="Noot"
           subTitle1={[<strong>Client:</strong>, " BCIT"]}
           subTitle2={[<strong>Role:</strong>, " Frontend Developer"]}
           para1={["In my third semester at BCIT, we were instructed to create an app that would solve a problem within a specific community as our semester-long project. Three other teammates and I decided to create a back-to-school app that helps parents with children in the Burnaby school district."]}
           img1={Img1}
           para2={["As one of the Frontend Developers in the team, I was responsible for building components and pages. I was also responsible for creating functionalities such as form selections and button animations. Once the app’s main pages were complete, I connected the frontend to the backend using APIs and routed pages to the navigation bar."]}
           img2={Img2}
           list={[<li>React Native</li>,<li>React Navigation</li>, <li>Axios API</li>, <li>Lottie Animations</li>]}
           />
           <NavBar></NavBar>
        </Page>
    )
}

export default Noot;

// linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.9)) , 