// sekcja "O mnie"

import React from 'react';
import './about.css';
import Card1 from './../../components/Card1/Card1';

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
            About iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
          </Card1>

          <Card1>
            About iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
          </Card1>
        </div>

      </div>
      
    </section>
  )
};

export default About;