import React from 'react';

const OpenerImageLayout = ({ 
  width, 
  height, 
  srcPath 
}) => (
  <div className="article__images">       
    <div className="article__column">    
      <img
        src={`${srcPath}/01.jpg`} 
        className="image image--1"
        width={width}
        height={height}
        alt="flowers"
      />
      <img
        src={`${srcPath}/04.jpg`} 
        className="image image--4"
        width={width}
        height={height}
        alt="flowers"
      />                 
    </div>
    <div className="article__column desktop-only">
      <img
        src={`${srcPath}/02.jpg`} 
        className="image image--2"
        width={width}
        height={height}
        alt="flowers"
      />
      <img
        src={`${srcPath}/03.jpg`} 
        className="image image--3"
        width={width}
        height={height}
        alt="flowers"
      />         
    </div>
  </div>

);
export default OpenerImageLayout;