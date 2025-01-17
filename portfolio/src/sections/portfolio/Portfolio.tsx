// sekcja "Portfolio"

import React from 'react';
import Card3 from '../../components/Card3/Card3';
import './portfolio.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { pc1, pc2, mobile1, mobile2 } from '../../assets/Portfolio_v1';
import { img1, img2, img3, img4, img5 } from '../../assets/GymApp';
import { img1_18, img2_18, img3_18, img4_18, img5_18, img6_18, img7_18 } from '../../assets/JustTravel18';
import { img1_10, img2_10, img3_10, img4_10, img5_10, img6_10, img7_10 } from '../../assets/JustTravel10';

const Portfolio = () => {

  let mobile = window.matchMedia("(width <= 62rem)").matches;

  const projects = [
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">JustTravel</strong> <p>Aplikacja do tworzenia podrózy</p> </div>',
      technology: 'Angular 18 + TypeScript',
      href: 'https://github.com/matCh00/JustTravel-Angular18',
      images: [img1_18, img2_18, img3_18, img4_18, img5_18, img6_18, img7_18],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">JustTravel</strong> <p>Aplikacja do tworzenia podrózy</p> </div>',
      technology: 'Angular 10 + TypeScript',
      href: 'https://github.com/matCh00/JustTravel-Angular10',
      images: [img1_10, img2_10, img3_10, img4_10, img5_10, img6_10, img7_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<div class="html-title"> <strong class="clr-secondary">GymApp</strong> <p>Aplikacja mobilna do zarządzania oraz monitorowania treningów</p> </div>',
      technology: 'React Native + TypeScript + Firebase',
      href: 'https://github.com/matCh00/GymApp',
      images: [img1, img2, img3, img4, img5],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
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