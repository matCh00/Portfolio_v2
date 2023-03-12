import React from 'react';
import './card1.css';

/** animowana karta */

type Props = {
  width?: string,
  padding?: string,
  highlight?: boolean,
  children: any,
};

const Card1 = ({width='50%', padding='1.5rem', highlight=false, children}: Props) => {

  return (
    <div  className={`card1 ${highlight ? "highlight" : ""}`} style={{width: width, padding: padding}}>
      {children}
    </div>
  )
};

export default Card1;