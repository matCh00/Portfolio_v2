import React from 'react';
import './card1.css';

/** animowana karta */

type Props = {
  width?: string,
  padding?: string,
  children: any,
};

const Card1 = ({width='50%', padding='1.5rem', children}: Props) => {

  return (
    <div className='card1' style={{width: width, padding: padding}}>
      {children}
    </div>
  )
};

export default Card1;