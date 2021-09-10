import React from 'react';
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

class NavBar extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
          if (window.scrollY > 50) {
            document.querySelector(".navbarHome").className = "navbarHome scrollHome";
          } else {
            document.querySelector(".navbarHome").className = "navbarHome";
          }
       
        };

    render() {
    return (
        <div className="navbarHome">
            <Content className="noselect">
                <Button text="AKSEL." link="/"></Button>
                <LinkCont>
                    <Dropdown></Dropdown>
                </LinkCont>
            </Content>
        </div>
    )
}
}
NavBar.defaultProps = {
    color: "#761cad"
}

export default NavBar;