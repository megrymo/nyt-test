import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Intro from './components/Intro';
import Lockup from './components/Lockup';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = () => {
  const intro = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro',
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        markers: true
      }
    })
  });

  return (
    <div className="container">
      <article className="article">  
        <div className="article__copy">
          <section className="intro" ref={intro}>
            <p className="intro__paragraph">
              <span className="intro__line intro__line--fade">
                The trembling air, time
              </span>
              <span className="intro__line intro__line--fade">
                sliding over our bodies like
              </span>
              <span className="intro__line intro__line--fade">
                water. All the emptiness
              </span>
              <span className="intro__line intro__line--fade">
                around us, as well as
              </span>
              <span className="intro__line">
                everything that remains.
              </span>
            </p>
          </section>
          <Lockup />
        </div>
        <div className="article__images">       
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
        </div>
      </article>
    </div>
    )
};

export default Body;
