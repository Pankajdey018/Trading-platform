import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcconts from '../OpenAccount';
import Footer from '../Footer';
import NavBar from '../NavBar';

function HomePage() {
    return ( <>
        <NavBar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAcconts />
        <Footer />
    </> );
}

export default HomePage;