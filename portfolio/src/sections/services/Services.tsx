// sekcja "Usługi"

import React from 'react';
import Card2 from '../../components/Card2/Card2';
import './services.css';

const Services = () => {
  return (
    <section id='services'>

      <div className="container">

        <div className="section-header">
          <h4>Co oferuję</h4>
          <h1>Usługi</h1>
        </div>

        <div className="services-content">
          <Card2 header={'Experience Lorem ipsum dolor'} lightHeader={false}>
            Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
          </Card2>

          <Card2 header={'Experience Lorem ipsum dolor'} lightHeader={false}>
            Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
          </Card2>

          <Card2 header={'Experience Lorem ipsum dolor'} lightHeader={false}>
            Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur est aut nostrum dignissimos incidunt excepturi laborum iusto. Aspernatur enim perspiciatis voluptatum. Unde officia deleniti eius ratione cupiditate earum molestias.
          </Card2>
        </div>

      </div> 
            
    </section>
  )
};

export default Services;