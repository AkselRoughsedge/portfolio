import React from 'react';
import styled from 'styled-components';
import PortfolioItem from '../PortfolioItem';

import Img_OzTREKK_1 from '../../Images/OzTREKK/1.png';
import Img_OzTREKK_2 from '../../Images/OzTREKK/5.png';
import Img_OzTREKK_3 from '../../Images/OzTREKK/3.png';

import Img_NachoDesk_1 from '../../Images/NachoDesk/8.png';
import Img_NachoDesk_2 from '../../Images/NachoDesk/7.png';
import Img_NachoDesk_3 from '../../Images/NachoDesk/2.png';
import Img_NachoDesk_4 from '../../Images/NachoDesk/4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
display:${props=>props.display ? props.display : "block"};
`;

const FlexCont = styled.div`
display: flex;
justify-content: space-between;
`;

const Job = ({title, date, role, desc, proj_2_display, proj_3_display,
    proj_1_title, proj_1_desc, proj_1_link, proj_1_skills, proj_1_imgs,
    proj_2_title, proj_2_desc, proj_2_link, proj_2_skills, proj_2_imgs,
    proj_3_title, proj_3_desc, proj_3_link, proj_3_skills, proj_3_imgs 
}) => {
    return (
        <Page>
            <div>
                <div style={{marginTop:126}}>
                    <h1 className='h1-w-montserrat'>{title}</h1>   
                    <SubTitleCont>
                        <h3 className='h3-w-montserrat'>{date}</h3>
                        <h3 className='h3-w-montserrat'>{role}</h3>
                    </SubTitleCont> 
                </div>
                <p className='p-w-opensans'>
                    {desc}
                </p>
            </div>
            <div>
                <ProjectCard style={{marginTop:64, marginBottom: 64}}>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>{proj_1_title}</h2>
                        <PortfolioItem link={proj_1_link} ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        {proj_1_desc}
                    </p>
                    <div className='small-w-opensans'>
                        {proj_1_skills}
                    </div>
                        {proj_1_imgs}
                </ProjectCard>

                <ProjectCard display={proj_2_display} style={{ marginBottom: 64}}>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>{proj_2_title}</h2>
                        <PortfolioItem link={proj_2_link} ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        {proj_2_desc}
                    </p>
                    <div className='small-w-opensans'>
                        {proj_2_skills}
                    </div>
                    {proj_2_imgs}
                </ProjectCard>

                <ProjectCard display={proj_3_display} style={{marginBottom: 64}}>
                    <FlexCont>
                        <h2 className='h2-w-montserrat'>{proj_3_title}</h2>
                        <PortfolioItem link={proj_3_link} ButtonMode={"0px"} External={"block"} Main={"none"} width={"fit-content"} ExternalText={"View Project"}></PortfolioItem>
                    </FlexCont>
                    <p className='p-w-opensans' style={{marginTop:"16px", marginBottom:"32px"}}>
                        {proj_3_desc}
                    </p>
                    <div className='small-w-opensans'>
                        {proj_3_skills}
                    </div>
                    {proj_3_imgs}
                </ProjectCard>
            </div>
        </Page>
    )
}

export default Job;