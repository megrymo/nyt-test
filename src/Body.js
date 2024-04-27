import React from 'react';
import Intro from './components/Intro';
import Lockup from './components/Lockup';

const Body = () => (
  <div className="container">
    <article className="article">   
      <div className="article__column article__column--left">    
        <img 
          src="./images/desktop/0_intro/01.jpg" 
          className="image image--active"
          width="960"
          height="1487"
          alt="flowers"
        />
        <img 
          src="./images/desktop/0_intro/04.jpg" 
          className="image"
          width="960"
          height="1487"
          alt="flowers"
        /> 
        <div className="article__copy">
          <Intro />
          <Lockup />
        </div>                  
      </div>
      <div className="article__column article__column--right">
        <img 
          src="./images/desktop/0_intro/02.jpg" 
          className="image image--active"
          width="960"
          height="1487"
          alt="flowers"
        />
        <img 
          src="./images/desktop/0_intro/03.jpg" 
          className="image"
          width="960"
          height="1487"
          alt="flowers"
        />         
      </div>
    </article>
  </div>
);

export default Body;
