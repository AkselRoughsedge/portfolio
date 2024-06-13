import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Job from '../comps/Job';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img_SecureHive_1 from '../Images/SecureHive/1.png';
import Img_SecureHive_2 from '../Images/SecureHive/2.png';
import Img_SecureHive_3 from '../Images/SecureHive/3.png';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const SecureHive = () => {

    return (
        <Page>
           <Job
                title={"Secure Hive"}
                desc={"A tech security company looking to revolutionize the way companies secure themselves. I was tasked with creating an app that updates users on the status of their company's security, and also worked on a data breach calculator with other developers."}
                role={"Front-end Developer Intern"}
                date={"Jan. 2022 - Aug. 2022"}

                proj_1_title={"Security App"}
                proj_1_link={"https://securehive.ca/"}
                proj_1_desc={"A mobile app that notifies users of the status of their company's security. I developed a front-end primarily using React Native, Node.js and Styled Components. API connections were done using Express.js."}
                proj_1_skills={
                    <div className='skill_cont'>
                        <div className='skill'>React Native</div>
                        <div className='skill'>Styled Components</div>
                        <div className='skill'>Node.js</div>
                        <div className='skill'>Express.js</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>CSS</div>
                    </div>}
                proj_1_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='home page of Secure Hive' className='proj_img' src={Img_SecureHive_3}></img></SwiperSlide>
                    </Swiper>}

                proj_2_title={"Data Breach Calculator"}
                proj_2_link={"https://hackerdetector.com/calculator"}
                proj_2_desc={"A calculator to help users estimate the potential damage their company could face from a data breach. A team and I developed this calculator using Vue.js and conducted research to fine-tune our calculator to make apropriate estimates."}
                proj_2_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>Vue.js</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>Figma</div>
                        <div className='skill'>HTML</div>
                    </div>}
                proj_2_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='Data breach calculator' className='proj_img' src={Img_SecureHive_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Information on data breachs' className='proj_img' src={Img_SecureHive_2}></img></SwiperSlide>
                    </Swiper>}

                proj_3_display={"none"}
            />
            <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default SecureHive;