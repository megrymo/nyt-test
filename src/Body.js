import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Lockup from './components/Lockup';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = () => {
  useGSAP(() => {
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup',
        scrub: true,
        start: 'top bottom',
        end: '+=50%',
      }
    }).to(('.intro__fade'), { opacity: 0, duration: 2})

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__rubric',
        scrub: true,
        start: 'top bottom',
        end: '+=25%',
      }
    }).to(('.intro__fade--second'), { opacity: 0, duration: 2})     

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__trigger',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      }
    }).to(('.image--2'), { 
      opacity: 0, 
      duration: 2.5, 
      ease: "power1.in",
    })    
    
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__trigger--two',
        start: 'bottom top',
        end: 'bottom bottom',
        scrub: true,
      }
    }).to(('.image--1'), { 
      opacity: 0, 
      duration: 2,
      ease: "power2.out",
    })
  });

  return (
    <div className="container">
      <article className="article">  
        <div className="article__copy">
          <section className="intro">
            <p>
              <span className="intro__fade">
                The trembling air, time<br />
                sliding over our bodies like<br />
                water. All the emptiness<br />
                around us, as well as<br />
              </span>
              <span className="intro__fade--second">
                everything that remains.<br />
              </span>
            </p>
          </section>
          <div className="scroller" />
          <Lockup />
        </div>
        <div className="article__images">       
          <div className="article__column">    
            <img
              src="./images/desktop/0_intro/01.jpg" 
              className="image image--1"
              width="960"
              height="1487"
              alt="flowers"
            />
            <img
              src="./images/desktop/0_intro/04.jpg" 
              className="image image--4"
              width="960"
              height="1487"
              alt="flowers"
            />                 
          </div>
          <div className="article__column desktop-only">
            <img
              src="./images/desktop/0_intro/02.jpg" 
              className="image image--2"
              width="960"
              height="1487"
              alt="flowers"
            />
            <img
              src="./images/desktop/0_intro/03.jpg" 
              className="image image--3"
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
