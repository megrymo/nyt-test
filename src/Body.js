import React from 'react';
import Background from './components/Background';
import Intro from './components/Intro';
import Lockup from './components/Lockup';

const Body = () => (
  <div className="container">
    <Background />
    <article className="article">
      <Intro />
      <Lockup />
    </article>
  </div>
);

export default Body;
