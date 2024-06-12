import React from 'react';
import styled from 'styled-components';
import NavBar from '../comps/NavBar';

import FootprintJob from '../comps/FootprintJob';

const Page = styled.div`
display:flex;
justify-content:center;
background-color:#202638;
`;

const Footprint = () => {

    return (
        <Page>
           <FootprintJob></FootprintJob>
           <NavBar header2="header2" color="#191e2c"></NavBar>
        </Page>
    )
}

export default Footprint;