import React from 'react';
import './card2.css';

/** animowana karta */

type Props = {
  width?: string,
  padding?: string,
  lightHeader?: boolean,
  highlight?: boolean,
  header: any,
  children: any,
};

const Card2 = ({
  width='50%', 
  padding='1.5rem', 
  lightHeader=true, 
  highlight=false, 
  header, 
  children
}: Props) => {

  return (
    <div className={`card2 ${highlight ? "highlight" : ""}`} style={{width: width}}>
      <div className="card2-header" style={{padding: padding, background: lightHeader ? 'var(--color-neutral-dark)' : 'var(--color-blur)'}}>
        {header}
      </div>
      <div className="card2-content" style={{padding: padding}}>
        {children}
      </div>
    </div>
  )
};

export default Card2;