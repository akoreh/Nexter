import React from 'react';

import './Layout.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Realtors from '../../components/Realtors/Realtors';
import Features from '../../components/Features/Features';
import Story from '../../components/Story/Story';
import Homes from '../../components/Homes/Homes';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

import Wrapper from '../../hoc/Wrapper';

const layout = () => {
    return (
        <Wrapper>
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <Story />
            <Homes />
            <Gallery />
            <Footer />
        </Wrapper>
    );
}

export default layout;