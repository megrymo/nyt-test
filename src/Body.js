import React from 'react';
import Background from './components/Background';
import Intro from './components/Intro';
import Lockup from './components/Lockup';

const Body = () => (
  <div className="container">
    <Background />
    <article className="article">
      <div className="article__column-left">
        <Intro />
        <Lockup />
      </div>
      <div className="article__column-right">
        <Background />
      </div>
    </article>
  </div>
);

export default Body;
