import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';
import Job from '../comps/Job';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img_Macnamara_1 from '../Images/Macnamara/1.png';
import Img_Macnamara_2 from '../Images/Macnamara/2.png';
import Img_Macnamara_3 from '../Images/Macnamara/3.png';

import Img_AfterDark_1 from '../Images/AfterDark/1.png';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const Footprint = () => {

    return (
        <Page>
           <Job
                title={"0Footprint"}
                desc={"A tech services and web development agency located in Vancouver. I was responsible for building and maintaining the front-end of applications and communicating with clients to help meet their needs."}
                role={"Front-end Developer"}
                date={"Jan. 2022 - Aug. 2022"}

                proj_1_title={"Macnamara"}
                proj_1_link={"https://macnamara.ca/"}
                proj_1_desc={"Deborah MacNamara, a best-selling author and scientist, needed a site to promote her work and research. Working alongside a designer, I brought the site to life using WordPress and a copious amount of CSS and HTML. The site also includes plugins for articles, events, and accounts."}
                proj_1_skills={
                    <div className='skill_cont'>
                        <div className='skill'>CSS</div>
                        <div className='skill'>HTML</div>
                        <div className='skill'>WordPress</div>
                        <div className='skill'>JavaScript</div>
                    </div>}
                proj_1_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='Homepage of site' className='proj_img' src={Img_Macnamara_2}></img></SwiperSlide>
                        <SwiperSlide><img alt='About page of site' className='proj_img' src={Img_Macnamara_1}></img></SwiperSlide>
                        <SwiperSlide><img alt='Event page of site' className='proj_img' src={Img_Macnamara_3}></img></SwiperSlide>
                    </Swiper>}

                proj_2_title={"After Dark Hospitality"}
                proj_2_link={"https://afterdarkhospitality.com/"}
                proj_2_desc={"I worked on the guest WiFi login system for After Dark Hospitality, the owner of some of Vancouver's premier nightclubs. I created the front-end of the service using React.js and used Axios for all the API connections."}
                proj_2_skills={
                    <div className='small-w-opensans, skill_cont'>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>Axios API</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>HTML</div>
                    </div>}
                proj_2_imgs={
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" style={{marginTop:"16px"}}>
                        <SwiperSlide><img alt='home page of WestOak restaurant' className='proj_img' src={Img_AfterDark_1}></img></SwiperSlide>
                    </Swiper>}

                proj_3_display={"none"}
            />
            <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Footprint;