import React from 'react'
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Educatin from './Education';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import NavBar from '../NavBar';





function HomePage() {
    return ( 
        <>
      
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Educatin/>
        <OpenAccount/>
       
        </>
     );
}

export default HomePage;