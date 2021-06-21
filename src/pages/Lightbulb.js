import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBarCharityDatabase';

import Img1 from '../Images/CharityDatabase/1.png';
import Img2 from '../Images/CharityDatabase/2.png';

import Project from '../comps/Project';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#f5f6fa;
`;

const Lightbulb = () => {

    return (
        <Page>
           <Project 
            bgcolor="#8867bf" 
            title="Lightbulb"
            subTitle1={[<strong>Client:</strong>, " BCIT"]}
            subTitle2={[<strong>Role:</strong>, " Frontend Developer"]}
            para1={["We were instructed to create a social media app as one of our final projects at BCIT.  Three other teammates and I decided to create a platform for specifically for developers and designers to thrive. Here they can share their projects with each other, post questions, or just talk about whatever they want."]}
            img1={Img1}
            para2={["My role as a Frontend Developer in the team, I was responsible for building components, pages, and creating functionalities. I also worked on connecting the frontend to the backend through APIs and created the schema + seeds with my teammates. "]}
            img2={Img2}
            list={[
            <li>React js</li>,
            <li>React Router</li>,
            <li>Axios API</li>,
            <li>Styled Components</li>,
            <li>Sass</li>,
            <li>Express js</li>,
            <li>MySQL Workbench</li>
         ]}
           ></Project>
           <NavBar></NavBar>
        </Page>
    )
}

export default Lightbulb;