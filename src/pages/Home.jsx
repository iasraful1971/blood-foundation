import React from 'react';
import CallCenter from '../components/CallCenter';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeNibandan from '../components/HomeNibandan';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
        
         <Navbar/> 
         <Hero/>
         <HomeNibandan/>
         <CallCenter/>
         <Footer/>
     
        </>
    );
};

export default Home;