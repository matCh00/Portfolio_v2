// sekcja GŁÓWNA

import React from 'react';
import Actions from '../../components/Actions/Actions';
import Socials from '../../components/Socials/Socials';
import './hero.css';
const ME = require("../../assets/personal/me2.jpg");

const Hero = () => {
  return (
    <section id='hero'>

      <div className="container container-hero">

        <img src={ME} alt="me" className='me-img'/>

        <div className='hero-content'>
          <h4>Cześć! Nazywam się</h4>
          <h1>Mateusz</h1>
          <h3>Jestem frontend developerem</h3>

          <Actions />
        </div>

        <Socials />
   
      </div>
      
    </section>
  )
};

export default Hero;