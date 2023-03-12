// sekcja "Portfolio"

import React from 'react';
import Card3 from '../../components/Card3/Card3';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <div className="container">

        <div className="section-header">
          <h4>Moje projekty</h4>
          <h1>Portfolio</h1>
        </div>

        <Card3 header={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}>
          Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
        </Card3>

      </div>  

    </section>
  )
};

export default Portfolio;