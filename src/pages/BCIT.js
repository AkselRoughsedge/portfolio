import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Job from '../comps/Job';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img_Noot_1 from "../Images/Noot/new-1.png";
import Img_Noot_2 from '../Images/Noot/new-2.png'

import Img_Lightbulb_1 from '../Images/Lightbulb/new-1.png';
import Img_Lightbulb_2 from '../Images/Lightbulb/new-2.png';

import Img_ShowTracker_1 from '../Images/ShowTracker/new-1.png';
import Img_ShowTracker_2 from '../Images/ShowTracker/new-2.png';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const BCIT = () => {

    return (
        <Page>
           <Job
                title={"BCIT"}
                desc={"The Digital Design and Development program at BCIT taught me many of the core foundations needed to succeed in the tech industry. I completed many projects during my time at BCIT that taught me teamwork, communication, development, and so much more. Here are a few of my favourite projects."}
                role={""}
                date={"2019 - 2021"}

                proj_1_title={"Noot"}
                proj_1_link={"https://github.com/jnguy11/noot-app"}
                proj_1_desc={"A back-to-school app that helps children return to school safely during the COVID-19 pandemic. I was responsible for creating components, pages, page functionality, and page routing. I included Lottie animations for loading screens and passed data to our backend using Axios APIs."}
                proj_1_skills={
                    <div className='skill_cont'>
                        <div className='skill'>React Native</div>
                        <div className='skill'>React Navigation</div>
                        <div className='skill'>StoryBook</div>
                        <div className='skill'>Axios API</div>
                        <div className='skill'>Lottie Files</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>Javascript</div>
                    </div>}
                proj_1_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='Posts in the app' className='proj_img' src={Img_Noot_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Daily health check' className='proj_img' src={Img_Noot_2}></img></SwiperSlide>
                    </Swiper>}

                proj_2_title={"Lightbulb"}
                proj_2_link={"https://github.com/LuuDavid778/lightbulb"}
                proj_2_desc={"A social media app for developers and designers to share their work with each other through posts. I was responsible for account creation functionality, components, and routing pages. I stored data using MySQL and encrypted user passwords using Bcrypt."}
                proj_2_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>React.js</div>
                        <div className='skill'>StoryBook</div>
                        <div className='skill'>Axios API</div>
                        <div className='skill'>Bcrypt</div>
                        <div className='skill'>Express.js</div>
                        <div className='skill'>Scss</div>
                        <div className='skill'>MySQL</div>
                        <div className='skill'>Styled Components</div>
                        <div className='skill'>React Router</div>
                    </div>}
                proj_2_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='All of the users posts' className='proj_img' src={Img_Lightbulb_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Detailed view of a post' className='proj_img' src={Img_Lightbulb_2}></img></SwiperSlide>
                    </Swiper>}

                proj_3_title={"Netflix n' Chill"}
                proj_3_link={"https://github.com/sylviaah/netflixnchill-front-end"}
                proj_3_desc={"A show tracking app that allows users to log TV shows and movies they're planning to watch or have seen. I was responsible for creating the backend endpoints using Express.js, and I stored data using MySQL. React.js was used for the front-end, and I connected API endpoints using Axios API."}
                proj_3_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>React.js</div>
                        <div className='skill'>Express.js</div>
                        <div className='skill'>StoryBook</div>
                        <div className='skill'>Axios API</div>
                        <div className='skill'>Styled Components</div>
                        <div className='skill'>Scss</div>
                        <div className='skill'>MySQL</div>
                        <div className='skill'>React Router</div>
                    </div>}
                proj_3_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='JavaScript plugin' className='proj_img' src={Img_ShowTracker_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Send to GPT API endpoint' className='proj_img' src={Img_ShowTracker_2}></img></SwiperSlide>
                    </Swiper>}
            />
            <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default BCIT;