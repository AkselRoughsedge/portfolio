import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Job from '../comps/Job';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img_TFinTracker_1 from '../Images/TFinTracker/1.png';
import Img_TFinTracker_2 from '../Images/TFinTracker/2.png';
import Img_TFinTracker_3 from '../Images/TFinTracker/3.png';
import Img_TFinTracker_4 from '../Images/TFinTracker/4.png';

import Img_OzTREKK_1 from '../Images/OzTREKK/1.png';
import Img_OzTREKK_2 from '../Images/OzTREKK/5.png';
import Img_OzTREKK_3 from '../Images/OzTREKK/3.png';

import Img_NachoDesk_1 from '../Images/NachoDesk/8.png';
import Img_NachoDesk_2 from '../Images/NachoDesk/7.png';
import Img_NachoDesk_3 from '../Images/NachoDesk/2.png';
import Img_NachoDesk_4 from '../Images/NachoDesk/4.png';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const Stayshure = () => {

    return (
        <Page>
           <Job
                title={"Stayshure"}
                desc={"While at Stayshure, a no-code development agency in Canada, I developed backend workflows that ran calculations, developed custom Javascript plugins to solve problems, and connected to API endpoints such as Backendless, SalesForce, and SharePoint to pass data. Some of my largest contributions included creating investment reporting software, university application management software, and a tool for converting bank statements to CSVs."}
                role={"Senior Product Developer"}
                date={"Aug. 2022 - May 2024"}

                proj_1_title={"Thomvest Ventures"}
                proj_1_link={"https://tfintracker.com/"}
                proj_1_desc={"An investment reporting software for Thomvest Ventures to manage and view all of their investments. I utilized Backendless's cloud code to calculate portfolio metrics and visualized the data using Chart.js and Javascript. Users are authenticated into the app by SMS codes sent to their phone using Vonage."}
                proj_1_skills={
                    <div className='skill_cont'>
                        <div className='skill'>Backendless</div>
                        <div className='skill'>Javascript</div>
                        <div className='skill'>Chart.js</div>
                        <div className='skill'>Vonage</div>
                        <div className='skill'>Bubble.io</div>
                        <div className='skill'>Sendgrid</div>
                    </div>}
                proj_1_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='JavaScript' className='proj_img' src={Img_TFinTracker_3}></img></SwiperSlide>
                        <SwiperSlide><img alt='Backendless' className='proj_img' src={Img_TFinTracker_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Backendless API endpoint' className='proj_img' src={Img_TFinTracker_2}></img></SwiperSlide>
                        <SwiperSlide><img alt='Portfolio front-end' className='proj_img' src={Img_TFinTracker_4}></img></SwiperSlide>
                    </Swiper>}

                proj_2_title={"OzTREKK"}
                proj_2_link={"https://portal.oztrekk.com/"}
                proj_2_desc={"A portal for students applying to universities to check the status of their applications and submit any required documents. I created API calls to OzTREKK's SalesForce database to sync student data, create tasks, and send chat logs. Documents that students upload are sent to SharePoint and notify OzTREKK staff."}
                proj_2_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>SalesForce</div>
                        <div className='skill'>SharePoint</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>Google OAuth 2.0</div>
                        <div className='skill'>Bubble.io</div>
                        <div className='skill'>SendGrid</div>
                    </div>}
                proj_2_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='Get student data from SalesForce' className='proj_img' src={Img_OzTREKK_2}></img></SwiperSlide>
                        <SwiperSlide><img alt='All Applications Front-end' className='proj_img' src={Img_OzTREKK_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Individual Application Front-end' className='proj_img' src={Img_OzTREKK_3}></img></SwiperSlide>
                    </Swiper>}

                proj_3_title={"NachoDesk"}
                proj_3_link={"https://app.nachodesk.com/"}
                proj_3_desc={"A tool for converting bank statements into CSVs that can then be uploaded to Quickbooks. I created a custom JavaScript plugin that takes transcribed text from OpenAI and converts it into a CSV format for the user. I also built in monthly subscription functionality that's managed using Outseta."}
                proj_3_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>Custom JavaScript Plugin</div>
                        <div className='skill'>OpenAI</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>Outseta</div>
                        <div className='skill'>Bubble.io</div>
                    </div>}
                proj_3_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='JavaScript plugin' className='proj_img' src={Img_NachoDesk_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Send to GPT API endpoint' className='proj_img' src={Img_NachoDesk_2}></img></SwiperSlide>
                        <SwiperSlide><img alt='Loading uploaded documents front-end' className='proj_img' src={Img_NachoDesk_3}></img></SwiperSlide>
                        <SwiperSlide><img alt='User settings front-end' className='proj_img' src={Img_NachoDesk_4}></img></SwiperSlide>
                    </Swiper>}
            />
            <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Stayshure;