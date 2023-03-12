import React from 'react';
import './heroPhoto.css';
const ME = require("../../assets/personal/me2.jpg");

/** zdjęcie w sekcji Hero */

const HeroPhoto = () => {

  return (
    <div className="image-cropper">
      <img src={ME} alt="me" className='hero-img'/>
    </div>
  )
};

export default HeroPhoto;