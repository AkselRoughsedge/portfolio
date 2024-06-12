import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import StayshureJob from '../comps/StayShureJob';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const Stayshure = () => {

    return (
        <Page>
           <StayshureJob></StayshureJob>
           <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Stayshure;