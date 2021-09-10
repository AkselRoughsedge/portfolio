import React from 'react';
import styled from 'styled-components';

const TitleText = styled.p`
color:white;
margin-top:10pt;
margin-bottom:30pt;
`;

const SubTitleText = styled.p`
color:white;
margin-top:10pt;
margin-bottom:0;
`;

const Content = styled.div`
width:70%;
@media (max-width: 600px) {
    width:90%;
  }
`;

const WorkTitle = styled.div`
padding-top:70pt;
position:absolute;
background-color:${props=>props.bgcolor ? props.bgcolor : "white"};
text-align:center;
width:100%;
height:180pt;
left:0;
@media (max-width: 1300px) {
  padding-top:100pt;
}
`;

const Body = styled.div`
margin-top:325pt;
`;

const Intro = styled.div`
@media (max-width: 1300px) {
    margin-bottom:100pt;
  }
`;

const Main = styled.div`
margin-top:80pt;
margin-bottom:100pt;
`;

const IntroFlex = styled.div`
display:flex;
@media (max-width: 1300px) {
    flex-direction:column;
  }
`;

const IntroTitle = styled.p`
@media (max-width: 1300px) {
    margin-bottom:30pt;
  }
`;

const ParagraphLeft = styled.div`
line-height:2;
font-size:14pt;
@media (max-width: 1300px) {
    margin-bottom:20pt;
  }
`;

const ParagraphRight = styled.div`
line-height:2;
font-size:14pt;
@media (max-width: 1300px) {
    margin-top:20pt;
  }
`;

const ImageRight = styled.img`
height:275pt;
padding-left:50pt;
@media (max-width: 1500px) {
  height:225pt;
}
@media (max-width: 1300px) {
    width:100%;
    padding-left:0pt;
    height:100%;
  }
`;

const ImageLeft = styled.img`
height:275pt;
padding-right:50pt;
@media (max-width: 1500px) {
  height:200pt;
}
@media (max-width: 1300px) {
    width:100%;
    padding-right:0pt;
    height:100%;
  }
`;



const Project = ({ title, subTitle1, subTitle2, subTitle3, bgcolor, para1, img1, para2, img2, list }) => {
    return (
                <Content>
                    <WorkTitle bgcolor={bgcolor}>
                        <TitleText className="big-text">{title}</TitleText>
                        <SubTitleText className="small-text">{subTitle1}</SubTitleText>
                        <SubTitleText className="small-text">{subTitle2}</SubTitleText>
                        <SubTitleText className="small-text">{subTitle3}</SubTitleText>
                    </WorkTitle>
                    <Body>
                        <Intro data-aos="fade-up" data-aos-duration="1000">
                            <IntroTitle className="medium-text">Project Description</IntroTitle>
                            <IntroFlex>
                                <ParagraphLeft><p style={{marginTop:0}}>{para1}</p></ParagraphLeft>
                                <ImageRight src={img1}></ImageRight>
                            </IntroFlex>
                        </Intro>
                        <Intro data-aos="fade-up" data-aos-duration="1000">
                            <IntroTitle className="medium-text">My Responsibilities</IntroTitle>
                            <IntroFlex>
                                <ImageLeft src={img2}></ImageLeft>
                                <ParagraphRight><p style={{marginTop:0}}>{para2}</p></ParagraphRight>
                            </IntroFlex>
                        </Intro>
                        <Main data-aos="fade-up" data-aos-duration="1000">
                            <IntroTitle className="medium-text">Tools Used</IntroTitle>
                            <ParagraphLeft>
                              <ul style={{marginTop:0}}>
                                {list}
                              </ul>
                            </ParagraphLeft>
                        </Main>
                    </Body>
                </Content>
    )
}

Project.defaultProps = {
    title: "default title"
}

export default Project;