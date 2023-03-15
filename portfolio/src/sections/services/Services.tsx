// sekcja "Usługi"

import React from 'react';
import Card2 from '../../components/Card2/Card2';
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai';

const Services = () => {

  const services = [
    {key: 'Implementacja GUI w technologii Angular', values: [
      {key: 'Tworzenie aplikacji typu MPA'},
      {key: 'Znajomość PrimeNg'},
      {key: 'Znajomość Primeflex'},
      {key: 'Znajomość RxJS'},
      {key: 'Dobre praktyki programowania'},
      {key: 'Dobre praktyki UI/UX'},
    ]},
    {key: 'Implementacja GUI w technologii React', values: [
      {key: 'Tworzenie aplikacji typu SPA'},
      {key: 'Znajomość hooków'},
      {key: 'Komponnty funkcyjne'},
    ]},
    {key: 'Implementacja GUI w technologii React Native', values: [
      {key: 'Tworzenie aplikacji mobilnej'},
      {key: 'Responsywność interfejsu'},
      {key: 'Znajomość hooków'},
    ]}
  ]

  return (
    <section id='services'>

      <div className="container">

        <div className="section-header">
          <h4>Co oferuję</h4>
          <h1>Usługi</h1>
        </div>

        <div className="services-content">

          {services.map(s => {
            return (

              <Card2 header={s.key} lightHeader={false} key={s.key}>
                <div className="services-content-card">
                  {s.values.map(v => {
                    return (

                      <p key={v.key}><AiOutlineCheck className='clr-secondary'/> {v.key}</p>
                      
                    )
                  })}
                </div>
              </Card2>
          
            )
          })}

        </div>

      </div> 
            
    </section>
  )
};

export default Services;