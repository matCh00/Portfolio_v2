// pasek nawigacji

import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {

  return (
    <>
      <nav className='desktop'>
        
        <a href="#">Hero</a>
        
        <a href="#about">About</a>

        <a href="#portfolio">Portfolio</a>

        <a href="#experience">Experience</a>

        <a href="#services">Services</a>

        <a href="#contact">Contact</a>
        
      </nav>


      <nav className='mobile'>
      
        <a href="#">h</a>
        
        <a href="#about">a</a>

        <a href="#portfolio">p</a>

        <a href="#experience">e</a>

        <a href="#services">s</a>

        <a href="#contact">c</a>
        
      </nav>
    
    </>
  )
};

export default Navbar;