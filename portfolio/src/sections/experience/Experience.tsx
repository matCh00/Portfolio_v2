// sekcja "Doświadczenie"

import React from 'react';
import Card2 from '../../components/Card2/Card2';
import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      
      <div className="container">

        <div className="section-header">
          <h4>Co potrafię</h4>
          <h1>Doświadczenie</h1>
        </div>

        <Card2 header={'Experience Lorem ipsum dolor'} lightHeader={false}>
          Experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
        </Card2>

      </div>  

    </section>
  )
};

export default Experience;