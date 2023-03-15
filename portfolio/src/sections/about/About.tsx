// sekcja "O mnie"

import React from 'react';
import './about.css';
import Card1 from './../../components/Card1/Card1';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen, AiFillHtml5} from 'react-icons/ai';
import {FaAngular, FaReact} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {CgCodeSlash} from 'react-icons/cg';

const About = () => {

  return (
    <section id='about'>

      <div className="container">

        <div className="section-header">
          <h4>Dowiedz się więcej</h4>
          <h1>O mnie</h1>
        </div>

        <div className="about-content">

          <Card1>
            <div className="about-content-card">
              <BiTimeFive className='clr-secondary'/>
              <p>9 miesiecy doświadczenia w branży IT na stanowisku frontend developera</p>
            </div>
          </Card1>

          <Card1>
            <div className="about-content-card">
              <CgCodeSlash className='clr-secondary'/>
              <div>
                <p>
                  Najczęściej używane technologie <br/>
                  <span style={{fontSize: '1.5rem'}}><FaAngular/> &nbsp; <FaReact/> &nbsp; <DiCss3/> &nbsp; <AiFillHtml5/></span>
                </p>
              </div>
            </div>
          </Card1>

          <Card1>
            <div className="about-content-card">
              <AiOutlineFundProjectionScreen className='clr-secondary'/>
              <p>3 projekty komercyjne, praca inżynierska, kilka własnych projektów</p>
            </div>
          </Card1>
          
        </div>

      </div>
      
    </section>
  )
};

export default About;