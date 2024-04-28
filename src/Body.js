import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Intro from './components/Intro';
import Lockup from './components/Lockup';
import OpenerImageLayout from './components/OpenerImageLayout';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = () => {
  const awsRoot = 'https://tofallin.s3.us-east-2.amazonaws.com';

  useGSAP(() => {
    // fade out first lines of text
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup',
        scrub: true,
        start: 'top bottom',
        end: '+=50%',
      }
    }).to(('.intro__fade'), { 
      opacity: 0, duration: 2.5
    })

    // fade out last line of text
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__rubric',
        scrub: true,
        start: 'top bottom',
        end: '+=25%',
      }
    }).to(('.intro__fade--second'), { 
      opacity: 0, duration: 2.5 
    })     

    // fade out first image   
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
    
    // fade out second image
    gsap.timeline({ 
      scrollTrigger: {
        trigger: '.lockup__trigger--two',
        start: 'bottom top',
        end: 'bottom bottom',
        scrub: true,
      }
    }).to(('.image--1'), { 
      opacity: 0, 
      duration: 2.5,
      ease: "power1.in",
    })
  });

  return (
    <div className="container">
      <article className="article">  
        {/*      
          Creating components here isn't strictly
          necessary in my opinion, but it keeps
          this file shorter therefore a little 
          easier to read in my opinion. I am also 
          operating from the assumption that more 
          copy and images / collages could / would 
          be added to this article. I structured 
          the image directories with the same
          thought in mind.
        */}
        <div className="article__copy">
          <Intro />
          <div className="scroller" />
          <Lockup />
        </div>
        <OpenerImageLayout 
          width={960}
          height={1487}
          srcPath={`${awsRoot}/images/0_intro/`}
        />
      </article>
    </div>
    )
};

export default Body;
