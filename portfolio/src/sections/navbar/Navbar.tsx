// pasek nawigacji

import React from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineStar, AiOutlineFundProjectionScreen, AiOutlineCustomerService} from 'react-icons/ai';
import {BsChatQuote} from 'react-icons/bs';

const Navbar = () => {

  return (
    <div className='hidden'>
      <nav className='desktop'>

        <h2>Mateusz Chalik</h2>

        <div>        
          <a href="#about">O mnie</a>

          <a href="#experience">Doświadczenie</a>

          <a href="#portfolio">Portfolio</a>

          <a href="#services">Usługi</a>

          <a href="#contact">Kontakt</a>
        </div>

      </nav>


      <nav className='mobile'>
      
        <a href="#"><AiOutlineHome/></a>
        
        <a href="#about"><AiOutlineUser/></a>

        <a href="#experience"><AiOutlineStar/></a>

        <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>

        <a href="#services"><AiOutlineCustomerService/></a>

        <a href="#contact"><BsChatQuote/></a>
        
      </nav>
    
    </div>
  )
};

export default Navbar;