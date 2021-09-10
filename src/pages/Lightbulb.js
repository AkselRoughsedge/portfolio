import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBarCharityDatabase';

import Img1 from '../Images/CharityDatabase/1.png';
import Img2 from '../Images/CharityDatabase/2.png';
import Github from '../Images/github.png';

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
            subTitle2={[<strong>Role:</strong>, " Front End Developer"]}
            subTitle3={[<div className="github-link"><img className="github-img" src={Github}></img><a color="white" href="https://github.com/LuuDavid778/lightbulb" target="_blank" rel="noreferrer">GitHub Link</a></div>]}
            para1={["We were instructed to create a social media app as one of our final projects at BCIT. Three teammates and I decided to create a platform for specifically developers and designers to thrive. Here they can share their projects with each other, post questions, or just talk about whatever they want.",<br/>,<br/>,"Users can create an account to make posts on the app. They can enter a title, description, image, and select a category for the post to be in."]}
            img1={Img1}
            para2={["As the role of Front End Developer for the team, I was responsible for building components, pages, and creating functionalities. I also worked on connecting the Front End to the backend through RESTful APIs and created the schema and seeds along side my teammates.",<br/>,<br/>,"We used React js as our framework and Styled Components to build our components. Express js was used for our backend, and we stored our data using MySQL. We also used bcrypt to encode user passwords before database storage."]}
            img2={Img2}
            list={[
            <li>React js</li>,
            <li>React Router</li>,
            <li>Axios API</li>,
            <li>Styled Components</li>,
            <li>Sass</li>,
            <li>Express js</li>,
            <li>Bcrypt</li>,
            <li>MySQL Workbench</li>
         ]}
           ></Project>
           <NavBar></NavBar>
        </Page>
    )
}

export default Lightbulb;