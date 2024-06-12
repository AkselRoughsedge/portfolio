import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import PortfolioItem from '../PortfolioItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img_OzTREKK_1 from '../../Images/OzTREKK/1.png';
import Img_OzTREKK_2 from '../../Images/OzTREKK/5.png';
import Img_OzTREKK_3 from '../../Images/OzTREKK/3.png';

import Img_NachoDesk_1 from '../../Images/NachoDesk/8.png';
import Img_NachoDesk_2 from '../../Images/NachoDesk/7.png';
import Img_NachoDesk_3 from '../../Images/NachoDesk/2.png';
import Img_NachoDesk_4 from '../../Images/NachoDesk/4.png';

import Img_TFinTracker_1 from '../../Images/TFinTracker/1.png';
import Img_TFinTracker_2 from '../../Images/TFinTracker/2.png';
import Img_TFinTracker_3 from '../../Images/TFinTracker/3.png';
import Img_TFinTracker_4 from '../../Images/TFinTracker/4.png';

const Page = styled.div`
width:70%;
@media (max-width: 600px) {
    width:90%;
  }
`;

const SubTitleCont = styled.div`
display: flex;
justify-content: space-between;
border-bottom: solid 4px #2e3751;
padding-bottom:8px;
margin-bottom:32px;
@media (max-width: 800px) {
    flex-direction: column;
    gap:8px;
  }
`;

const ProjectCard = styled.div`
border-radius:24px;
background-color: #2e3751;
padding:40px;
`;

const SlideImg = styled.img`
width:100%;
height:600px;
object-fit: cover;
border-radius:8px;
@media (max-width: 800px) {
    height:500px;
  }
`;

const FlexCont = styled.div`
display: flex;
justify-content: space-between;
`;

const FlexCont2 = styled.div`
display: flex;
gap:8px;
flex-wrap: wrap;
`;

const Skill = styled.div`
border-radius:16px;
padding-left:8px;
padding-right:8px;
background-color: #52618f;
`;

const StayshureJob = () => {
    return (
        <Page>
            <div>
                <div style={{marginTop:126}}>
                    <h1 className='h1-w-montserrat'>Stayshure</h1>   
                    <SubTitleCont>
                        <h3 className='h3-w-montserrat'>Aug. 2022 - May 2024</h3>
                        <h3 className='h3-w-montserrat'>Senior Product Developer</h3>
                    </SubTitleCont> 
                </div>
                <p className='p-w-opensans'>While at Stayshure, a no-code development agency in Canada, 
                I developed backend workflows that ran calculations, developed custom Javascript plugins 
                to solve problems, and connected to API endpoints such as Backendless, SalesForce, and 
                SharePoint to pass data. Some of my largest contributions included creating investment 
                reporting software, university application management software, and a tool for converting 
                bank statements to CSV's.
                </p>
            </div>
            <div style={{marginTop:64}}>
                <ProjectCard>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>Thomvest Ventures</h2>
                        <PortfolioItem link="https://tfintracker.com/" ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        An investment reporting software for Thomvest Ventures to manage and view all of their investments.
                        I utilized Backendless's cloud code to calculate portfolio metrics, and visualized the data using Chart.js and Javascript.
                        Users were authenticated into the app by SMS codes sent to their phone using Vonage.
                    </p>
                    <FlexCont2 className='small-w-opensans'>
                        <Skill>Backendless</Skill>
                        <Skill>JavaScript</Skill>
                        <Skill>Chart.js</Skill>
                        <Skill>Vonage</Skill>
                        <Skill>Bubble.io</Skill>
                        <Skill>SendGrid</Skill>
                    </FlexCont2>
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><SlideImg src={Img_TFinTracker_3}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_TFinTracker_1}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_TFinTracker_2}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_TFinTracker_4}></SlideImg></SwiperSlide>
                    </Swiper>
                </ProjectCard>
                <ProjectCard style={{marginTop:64}}>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>OzTREKK</h2>
                        <PortfolioItem link="https://portal.oztrekk.com/" ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        A portal for students applying to universities to check the status of their applications, and submit any required documents.
                        I created API calls to OzTREKK's SalesForce database to sync student data, create tasks, and send chat logs. Documents that students
                        upload are sent to SharePoint and notify OzTREKK staff.
                        
                        </p>
                    <FlexCont2 className='small-w-opensans'>
                        <Skill>SalesForce</Skill>
                        <Skill>SharePoint</Skill>
                        <Skill>JavaScript</Skill>
                        <Skill>Google OAuth 2.0</Skill>
                        <Skill>Bubble.io</Skill>
                        <Skill>SendGrid</Skill>
                    </FlexCont2>
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><SlideImg src={Img_OzTREKK_2}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_OzTREKK_1}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_OzTREKK_3}></SlideImg></SwiperSlide>
                    </Swiper>
                </ProjectCard>
                <ProjectCard style={{marginTop:64, marginBottom: 64}}>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>NachoDesk</h2>
                        <PortfolioItem link="https://app.nachodesk.com/" ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        A tool for converting bank statements into CSV's that can then be uploaded to Quickbooks. I created a custom
                        JavaScript plugin that takes transcribed text from OpenAI and converts it into a CSV format for the user. I also
                        built in monthly subscription functionality that's managed using Outseta.
                        </p>
                    <FlexCont2 className='small-w-opensans'>
                        <Skill>Custom JavaScript Plugin</Skill>
                        <Skill>OpenAI</Skill>
                        <Skill>JavaScript</Skill>
                        <Skill>Outseta</Skill>
                        <Skill>Bubble.io</Skill>
                    </FlexCont2>
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><SlideImg src={Img_NachoDesk_1}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_NachoDesk_2}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_NachoDesk_3}></SlideImg></SwiperSlide>
                        <SwiperSlide><SlideImg src={Img_NachoDesk_4}></SlideImg></SwiperSlide>
                    </Swiper>
                </ProjectCard>
            </div>
        </Page>
    )
}

export default StayshureJob;