import React from 'react';

const Lockup = () => (
  <header className="lockup">
    {/*
      I was uncertain whether this rubric
      should link or not, so I've linked 
      just in case and organized z-indices
      so that users can hover, click, etc.
    */}
    <a 
      href="https://www.nytimes.com/section/opinion" 
      className="lockup__rubric"
    >
      Opinion
    </a>
    {/*
      I wrapped specific words in trigger classes 
      in case editorial and/or design felt strongly
      about tying the animations to said words,
      otherwise i would use a percentage or pixel
      based end point for the scroll animations
    */} 
    <h1 className="lockup__hed">
      To<br />
      <span className="lockup__trigger">
        Fall<br />
      </span>
      In Love<br />
      With<br />
      The<br />
      <span className="lockup__trigger--two">
        World<br />
      </span>
    </h1>
    <h2 className="lockup__dek">
      A late summer meditation<br />
      on time, loss, and solace in<br />
      the natural world, made from<br />
      the work of the photographer<br />
      Mary Manning and the<br />
      poet Brian Turner.
    </h2>
  </header>
);

export default Lockup;
