import React from 'react';

const OpenerImageLayout = ({ 
  width, 
  height, 
  srcPath
}) => (
  <div className="article__images">       
    <div className="article__column">  
      <picture>
        <source media="(max-width: 720px)"
          width="750"
          height="1624"
          srcSet={`${srcPath}mobile/01.jpg`} 
        />   
        <img
          src={`${srcPath}desktop/01.jpg`} 
          className="image image--1"
          width={width}
          height={height}
          alt="abstract orange, red, and purple photograph of flowers."
        />
      </picture>
      <picture>
        <source media="(max-width: 720px)"
          width="800"
          height="1153"
          srcSet={`${srcPath}mobile/04.jpg`} 
        />        
        <img
          src={`${srcPath}desktop/04.jpg`} 
          className="image image--4"
          width={width}
          height={height}
          alt="photograph of a woman with brown hair 
            wearing a white dress over a red shirt 
            and pants, moving in a green field."
        />
      </picture>                 
    </div>
    <div className="article__column desktop-only">
      <img
        src={`${srcPath}desktop/02.jpg`} 
        className="image image--2"
        width={width}
        height={height}
        alt="photograph of pink, yellow, and red flowers 
        in green and dark red leaves."
      />
      <img
        src={`${srcPath}desktop/03.jpg`} 
        className="image image--3"
        width={width}
        height={height}
        alt="photograph of the corner of an empty room. the light 
        is mostly blue and a window fills the righthand wall."
      />         
    </div>
  </div>

);
export default OpenerImageLayout;