import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Lockup from './components/Lockup';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = () => {
  useGSAP(() => {
    gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.intro',
        pin: '.intro',
        start: 'top top',
        end: '+300%',
        markers: true
      });
    });

    gsap.set(('.intro__fade'), {
      opacity: 1,
    });

    gsap.set(('.intro__fade--second'), {
      opacity: 1,
    });

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.intro',
        scrub: true,
        start: 'top top',
        end: '+1%',
        markers: true
      }
    }).to(('.intro__fade'), { opacity: 0, duration: 2})

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.intro',
        scrub: true,
        start: '+15%',
        end: '+30%',
        markers: true
      }
    }).to(('.intro__fade--second'), { opacity: 0, duration: 2})    

    gsap.set(('.image--1'), {
      opacity: 1,
    });

    gsap.set(('.image--2'), {
      opacity: 1,
    });  

    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__hed',
        start: 'top bottom',
        end: '-100%',
        markers: true,
        scrub: true,
      }
    }).to(('.image--2'), { 
      opacity: 0, duration: 2
    })    
    
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__dek',
        start: 'top center',
        end: '+25%',
        markers: true,
        scrub: true,
      }
    }).to(('.image--1'), { 
      opacity: 0, duration: 2
    })
  });

  return (
    <div className="container">
      <article className="article">  
        <div className="article__copy">
          <section className="intro">
            <p className="intro__paragraph">
              <span className="intro__fade">
                <span className="intro__line">
                  The trembling air, time
                </span>
                <span className="intro__line">
                  sliding over our bodies like
                </span>
                <span className="intro__line">
                  water. All the emptiness
                </span>
                <span className="intro__line">
                  around us, as well as
                </span>
              </span>
              <span className="intro__line intro__fade--second">
                everything that remains.
              </span>
            </p>
          </section>
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
