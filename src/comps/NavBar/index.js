import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Dropdown from '../Dropdown';

const Main = styled.div`
    width:100%;
    height:70pt;
    position:fixed;
    display:flex;
    justify-content:center;
    transition: 0.4s;
    z-index:2;
`;

const Content = styled.div`
font-family: 'Lato', sans-serif;
display:flex;
height:70pt;
width:70%;
align-items:center;
@media (max-width: 600px) {
    width:90%;
  }
`;

const LinkCont = styled.div`
position:absolute;
right:15%;
display:${props=>props.hide ? props.hide : "flex"};
@media (max-width: 600px) {
    right:5%;
  }
`;

const NavBar = ({header1, header2, color, hide}) => {

  const [header, setHeader] = useState(header1);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader(header1)
    } else if (window.scrollY > 70) {
      return setHeader(header2)
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
    
    return (
        <Main className={header}>
            <Content className="noselect">
                <Button text="AKSEL." link="/"></Button>
                <LinkCont hide={hide}>
                    <Dropdown color={color}></Dropdown>
                </LinkCont>
            </Content>
        </Main>
    )
}

export default NavBar;