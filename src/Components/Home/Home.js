import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import './Home.css';
import Packages from './Packages/Packages';
import ProjectPart from './ProjectPart/ProjectPart';

const Home = () => {
    return (
        <div className='bg'>
            <Navbar></Navbar>
           <Header></Header>
           <Packages></Packages>
           <ProjectPart></ProjectPart>
        </div>
    );
};

export default Home;