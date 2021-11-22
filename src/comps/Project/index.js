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
background-color:${props => props.bgcolor ? props.bgcolor : "white"};
text-align:center;
width:100%;
height:180pt;
display:flex;
flex-direction:column;
align-items:center;
left:0;
@media (max-width: 1300px) {
  padding-top:100pt;
}
`;

const Body = styled.div`
margin-top:325pt;
`;

const Intro = styled.div`
padding-bottom:100pt;
`;

const IntroAdditional = styled.div`
display:${props => props.displayPara3 ? props.displayPara3 : "none"};
padding-bottom:100pt;
`;

const Main = styled.div`
margin-bottom:100pt;
`;

const IntroFlex = styled.div`
display:flex;
@media (max-width: 1300px) {
    flex-direction:column;
  }
`;

const IntroTitle = styled.p`
margin-top:0;
`;

const ParagraphLeft = styled.div`
line-height:2;
font-size:14pt;
font-family: 'Open Sans', sans-serif;
`;

const ParagraphRight = styled.div`
line-height:2;
font-size:14pt;
font-family: 'Open Sans', sans-serif;
`;

const ImageRight = styled.img`
height:300pt;
padding-left:100pt;
padding-right:0pt;
@media (max-width: 1600px) {
  padding-left:${props => props.padding ? props.padding : "100pt"};
}
@media (max-width: 1300px) {
  height:${props => props.imgHeight ? props.imgHeight : "300pt"};
  padding-right:0pt;
  padding-left:0pt;
  padding-bottom:20pt;
}
`;

const ImageLeft = styled.img`
display:none;
@media (max-width: 1300px) {
  display:block;
  height:${props => props.imgHeight ? props.imgHeight : "300pt"};
  padding-right:0pt;
  padding-left:0pt;
}
`;

const TempImageLeft = styled.img`
height:300pt;
padding-left:0pt;
padding-right:100pt;
@media (max-width: 1600px) {
  padding-right:${props => props.padding ? props.padding : "100pt"};
}
@media (max-width: 1300px) {
  height:${props => props.imgHeight ? props.imgHeight : "300pt"};
  padding-right:0pt;
  padding-left:0pt;
}
`;

const DisplayBoth = styled.div`
display:block;
@media (max-width: 1300px) {
  display:flex;
  justify-content:space-around;
  flex-direction:${props=>props.imgDirection ? props.imgDirection : "row"};
  }
`;

const HideImg2 = styled.div`
display:block;
@media (max-width: 1300px) {
  display:none;
}
`;

const Project = ({ title, subTitle1, subTitle2, subTitle3, bgcolor, para1, img1, para2, img2, list, imgDirection, padding, imgHeight, Section1, Section2, Section3, img3, para3, displayPara3 }) => {
  return (
    <Content>
      <WorkTitle bgcolor={bgcolor}>
        <TitleText className="big-text">{title}</TitleText>
        <SubTitleText className="small-text">{subTitle1}</SubTitleText>
        <SubTitleText className="small-text">{subTitle2}</SubTitleText>
        <div style={{marginTop:"10pt"}} className="small-text">{subTitle3}</div>
      </WorkTitle>
      <Body>
        <Intro data-aos="fade-up" data-aos-duration="1000">
          <IntroFlex>
            <div>
              <IntroTitle className="medium-text">{Section1}</IntroTitle>
              <ParagraphLeft><p style={{ marginTop: 0 }}>{para1}</p></ParagraphLeft>
            </div>
            <DisplayBoth imgDirection={imgDirection}>
              <ImageRight padding={padding} imgHeight={imgHeight} src={img1}></ImageRight>

                <ImageLeft padding={padding} imgHeight={imgHeight} src={img2}></ImageLeft>

            </DisplayBoth>
          </IntroFlex>
        </Intro>
        <Intro data-aos="fade-up" data-aos-duration="1000">
          <IntroFlex>
            <HideImg2>
              <TempImageLeft padding={padding} imgHeight={imgHeight} src={img2}></TempImageLeft>
            </HideImg2>
            <div>
              <IntroTitle className="medium-text">{Section2}</IntroTitle>
              <ParagraphRight><p style={{ marginTop: 0 }}>{para2}</p></ParagraphRight>
            </div>
          </IntroFlex>
        </Intro>
        <IntroAdditional displayPara3={displayPara3} data-aos="fade-up" data-aos-duration="1000">
          <IntroFlex>
            <div>
              <IntroTitle className="medium-text">{Section3}</IntroTitle>
              <ParagraphLeft><p style={{ marginTop: 0 }}>{para3}</p></ParagraphLeft>
            </div>
              <ImageRight padding={padding} imgHeight={imgHeight} src={img3}></ImageRight>
          </IntroFlex>
        </IntroAdditional>
        <Main data-aos="fade-up" data-aos-duration="1000">
          <IntroTitle className="medium-text">Tools Used</IntroTitle>
          <ParagraphLeft>
            <ul style={{ marginTop: 0 }}>
              {list}
            </ul>
          </ParagraphLeft>
        </Main>
      </Body>
    </Content>
  )
}

Project.defaultProps = {
  title: "default title",
  Section1: "Project Description",
  Section2: "My Responsibilities",
}

export default Project;