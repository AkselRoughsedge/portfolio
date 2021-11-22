import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Dropdown from '../Dropdown';

const Content = styled.div`
font-family: 'Lato', sans-serif;
display:flex;
height:70pt;
width:70%;
@media (max-width: 600px) {
    width:90%;
  }
`;

const LinkCont = styled.div`
position:absolute;
right:15%;
display:flex;
@media (max-width: 600px) {
    right:5%;
  }
`;

const NavBar = ({header1, header2, color}) => {

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
        <div className={header}>
            <Content className="noselect">
                <Button text="AKSEL." link="/"></Button>
                <LinkCont>
                    <Dropdown color={color}></Dropdown>
                </LinkCont>
            </Content>
        </div>
    )
}

export default NavBar;