import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import Img1 from '../Images/ShowTracker/1.png';
import Img2 from '../Images/ShowTracker/2.png';
import Github from '../Images/github.png';

import Project from '../comps/Project';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:##f5f6fa;
`;

const ShowTracker = () => {

    return (
        <Page>
           <Project
           bgcolor="#c24e4e"
           title="Show Tracker"
           subTitle1={[<strong>Client:</strong>, " BCIT"]}
           subTitle2={[<strong>Role:</strong>, " Lead Front-End Developer"]}
           subTitle3={[<div className="github-link"><img alt="GitHub Icon" className="github-img" src={Github}></img><a color="white" href="https://github.com/sylviaah/netflixnchill-front-end" target="_blank" rel="noreferrer">GitHub Link</a></div>]}
           para1={["In my final semester at BCIT, we were instructed to create an app that allows the user to keep track of data they have entered. My teammates and I decided to create an app for tracking TV shows and movies you have seen.",<br/>,<br/>,"The user is able to enter their own title, description, and image when adding a show. They can also choose if it's a show they're currently watching, planning to watch, or completed in the past."]}
           img1={Img1}
           para2={["As the Lead Front-End Developer of the team, I was responsible for creating components and pages as well as making sure the app was finalized correctly. I routed pages to the navigation bar, and also connected the Front-End to the backend using RESTful APIs. I also helped the backend with creating endpoints, the ERD, and setting up the schema.",<br/>,<br/>,"We decided to use React js for our Front-End, and Express js for our backend. We also stored all of the data within MySQL."]}
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
           <NavBar header1="header1ShowTracker" header2="header2ShowTracker" color="#b04646"></NavBar>
        </Page>
    )
}

export default ShowTracker;