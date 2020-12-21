import React from 'react';
import web from '../src/pics/wall3.png';
import Common from './Common_(FP)';
const About_FP = ()=>{
    return(
        <>
        <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About_FP;