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

        <Card1>
          About Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
        </Card1>

      </div>
      
    </section>
  )
};

export default About;