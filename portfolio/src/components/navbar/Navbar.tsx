// pasek nawigacji

import React from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineStar, AiOutlineFundProjectionScreen, AiOutlineCustomerService} from 'react-icons/ai';
import {BsChatQuote} from 'react-icons/bs';

const Navbar = () => {

  return (
    <>
      <nav className='desktop'>

        <h2>Mateusz Chalik</h2>

        <div>
          <a href="#">Hero</a>
        
          <a href="#about">About</a>

          <a href="#portfolio">Portfolio</a>

          <a href="#experience">Experience</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>
        </div>

      </nav>


      <nav className='mobile'>
      
        <a href="#"><AiOutlineHome/></a>
        
        <a href="#about"><AiOutlineUser/></a>

        <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>

        <a href="#experience"><AiOutlineStar/></a>

        <a href="#services"><AiOutlineCustomerService/></a>

        <a href="#contact"><BsChatQuote/></a>
        
      </nav>
    
    </>
  )
};

export default Navbar;