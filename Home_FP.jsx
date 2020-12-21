import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/pics/wall2.jpg';
import Common from './Common_(FP)';
const Home_FP = () => {
    return (
        <>
            <Common name="Get Optimized Solution with" imgsrc={web} visit="/service" btname="Explore" />

        </>
    );
};

export default Home_FP;