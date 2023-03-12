import React from 'react';
import './card2.css';

/** animowana karta */

type Props = {
  width?: string,
  padding?: string,
  background?: boolean,
  highlight?: boolean,
  header: any,
  children: any,
};

const Card2 = ({width='50%', padding='1.5rem', background=true, highlight=false, header, children}: Props) => {

  return (
    <div className={`card2 ${highlight ? "highlight" : ""}`} style={{width: width}}>
      <div className="card2-header" style={{padding: padding, background: background ? 'var(--color-neutral)' : 'var(--color-neutral-blur)'}}>
        {header}
      </div>
      <div className="card2-content" style={{padding: padding}}>
        {children}
      </div>
    </div>
  )
};

export default Card2;