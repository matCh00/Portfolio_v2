// sekcja GŁÓWNA

import React from 'react';
import Actions from '../../components/Actions/Actions';
import HeroPhoto from '../../components/HeroPhoto/HeroPhoto';
import Socials from '../../components/Socials/Socials';
import './hero.css';

const Hero = () => {
  
  return (
    <section id='hero' className='hidden'>

      <div className="container container-hero">

        <HeroPhoto />

        <div>
          <div className="section-header">
            <h4>Cześć! Nazywam się</h4>
            <h1>Mateusz</h1>
            <h3>Jestem frontend developerem</h3>
          </div>
          
          <Actions />
        </div>
        
        <Socials />
   
      </div>
      
    </section>
  )
};

export default Hero;