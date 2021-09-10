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
            document.querySelector(".navbarNoot").className = "navbarNoot scrollNoot";
          } else {
            document.querySelector(".navbarNoot").className = "navbarNoot";
          }
       
        };

    render() {
    return (
        <div className="navbarNoot">
            <Content className="noselect">
                <Button text="AKSEL." link="/"></Button>
                <LinkCont>
                    <Dropdown color="#bf8c24"></Dropdown>
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