import React from 'react';
import './card3.css';

/** animowana karta */

type Props = {
  width?: string,
  padding?: string,
  gap?: string,
  highlight?: boolean,
  headerPos?: 'top' | 'left' | 'right' | 'bottom',
  headerWidth?: string,
  header: any,
  children: any,
};

const Card3 = ({
  width='50%', padding='2rem', gap='1rem', highlight=false, 
  headerPos='top', headerWidth='50%', header, children}: Props) => {

  const contentWidth = (100 - +headerWidth.replace('%','')) + '%';

  return (
    <div className={`card3 ${highlight ? "highlight" : ""}`} style={{width: width}}>

      {headerPos === 'left'
      ?
        <div className="card3-content" style={{padding: padding, gap: gap, flexDirection: 'row'}}>
          <div style={{width: headerWidth}}>{header}</div>
          <div style={{width: contentWidth}}>{children}</div>
        </div>
      :
      headerPos === 'right'
      ?
        <div className="card3-content" style={{padding: padding, gap: gap, flexDirection: 'row'}}>
          <div style={{width: contentWidth}}>{children}</div>
          <div style={{width: headerWidth}}>{header}</div>
        </div>
      :
      headerPos === 'top'
      ?
        <div className="card3-content" style={{padding: padding, gap: gap, flexDirection: 'column'}}>
          <div style={{width: '100%'}}>{header}</div>
          <div style={{width: '100%'}}>{children}</div>
        </div>
      :
      headerPos === 'bottom'
      ?
        <div className="card3-content" style={{padding: padding, gap: gap, flexDirection: 'column'}}>
          <div style={{width: '100%'}}>{children}</div>
          <div style={{width: '100%'}}>{header}</div>
        </div>
      :
      null
      }
      
    </div>
  )
};

export default Card3;