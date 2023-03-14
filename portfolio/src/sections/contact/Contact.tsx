// sekcja "Kontakt"

import React from 'react';
import './contact.css';
import Card1 from './../../components/Card1/Card1';

const Contact = () => {
  return (
    <section id='contact'>

      <div className="container">

        <div className="section-header">
          <h4>Skontaktujmy się</h4>
          <h1>Kontakt</h1>
        </div>

        <div className="contact-content">
          <Card1>
            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card1>

          <Card1>
            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card1>

          <Card1>
            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card1>

          <Card1>
            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card1>
        </div>

      </div> 
      
    </section>
  )
};

export default Contact;