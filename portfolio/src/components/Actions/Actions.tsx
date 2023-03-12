import React from 'react';
import './actions.css';
const CV = require('../../assets/personal/cv.pdf');

/** akcje w sekcji Hero */

const Actions = () => {
  return (
    <div className='actions'>

      <a href={CV} download='CV Mateusz Chalik' className='btn btn-primary'>Pobierz CV</a>
      <a href="#contact" className='btn'>Kontakt</a>

    </div>
  )
}

export default Actions;