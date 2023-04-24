// sekcja "Portfolio"

import React from 'react';
import Card3 from '../../components/Card3/Card3';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { pc1, pc2, mobile1, mobile2 } from '../../assets/Portfolio_v1';
import { img1, img2, img3, img4, img5 } from '../../assets/GymApp';
import { s1, s2, s3, sm1, sm2 } from '../../assets/SecondBrainApp';
import { sd1, sd2, sd3, sd4, sd5 } from '../../assets/SecondBrainAppDashboard';

const Portfolio = () => {

  let mobile = window.matchMedia("(width <= 43rem)").matches;

  const projects = [
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">GymApp</strong> <p>Aplikacja mobilna do zarządzania oraz monitorowania treningów</p> </div>',
      technology: 'React Native + TypeScript + Firebase',
      href: 'https://github.com/matCh00/GymApp',
      images: [img1, img2, img3, img4, img5],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">SecondBrainAppDashboard</strong> <p>Aplikacja webowa do zarządzania notatkami</p> </div>',
      technology: 'React + TypeScript + PrimeReact + Firebase',
      href: 'https://github.com/matCh00/SecondBrainAppDashboard',
      images: [sd1, sd2, sd3, sd4, sd5],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: true
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">SecondBrainApp</strong> <p>Aplikacja webowa do przechowywania notatek</p> </div>',
      technology: 'React + TypeScript + PrimeReact + Firebase',
      href: 'https://github.com/matCh00/SecondBrainApp',
      images: [s1, sm2, s2, sm1, s3],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: true
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">Portfolio_v1</strong> <p>Responsywna strona internetowa</p> </div>',
      technology: 'React + JavaScript + CSS',
      href: 'https://github.com/matCh00/Portfolio',
      images: [pc1, mobile1, pc2, mobile2],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: true
    },
  ]
  
  return (
    <section id='portfolio' className='hidden'>
      
      <div className="container portfolio-container">

        <div className="section-header">
          <h4>Moje projekty</h4>
          <h1>Portfolio</h1>
        </div>

        <div className="portfolio-content">

          {projects.map(project => {
            return (

              <Card3 
                key={project.titleHtml}
                padding='3rem 3rem 1rem 3rem' 
                gap={mobile ? '1rem' : '5rem'}
                headerPos={mobile ? 'top' : 'left'}
                header={
                  <div className='portfolio-header-content'>
                    <h3 dangerouslySetInnerHTML={{__html: project.titleHtml}}></h3>
                    <h4>{project.technology}</h4>
                    <a href={project.href} target={'_blank'} className='btn'> GitHub </a>
                  </div>
                } 
              >
                <div className="carousel">

                  <Carousel 
                    showStatus={false} 
                    showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true}
                    interval={4000}
                    transitionTime={1000}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                  >
                    {project.images.map(i => {
                      return (
                        <div className="portfolio-img-container" key={i}>
                          <img src={i} className='portfolio-img'/>
                        </div>
                      )
                    })}
                  </Carousel>

                </div>
              </Card3>
            )
          })}

        </div>
        
      </div>  

    </section>
  )
};

export default Portfolio;