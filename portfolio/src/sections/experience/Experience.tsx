// sekcja "Doświadczenie"

import React from 'react';
import Card2 from '../../components/Card2/Card2';
import './experience.css';
import {AiOutlineCheck, AiFillStar, AiOutlineStar} from 'react-icons/ai';

const Experience = () => {

  const experienceFront = [
    {key: 'Angular', value: 5},
    {key: 'TypeScript', value: 5},
    {key: 'PrimeFaces', value: 5},
    {key: 'React', value: 5},
    {key: 'JavaScript', value: 4},
    {key: 'HTML', value: 4},
    {key: 'CSS/SCSS', value: 4},
  ]

  const experienceBackend = [
    {key: 'Python', value: 3},
    {key: 'Firebase', value: 4},
    {key: 'Java', value: 2},
  ]

  const experienceMobile = [
    {key: 'React Native', value: 5},
  ]

  return (
    <section id='experience'>
      
      <div className="container">

        <div className="section-header">
          <h4>Co potrafię</h4>
          <h1>Doświadczenie</h1>
        </div>


        <div className="experience-content">

          <Card2 header={'Frontend'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceFront.map(e => {
                return (
                  <p key={e.key}>
                    <AiOutlineCheck className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
                    {e.value === 5 ? <FiveStars/> : e.value === 4 ? <FourStars/> : e.value === 3 ?
                    <ThreeStars/> : e.value === 2 ? <TwoStars/> : <OneStars/>}
                  </p>
                )
              })}
            </div>
          </Card2>

          <Card2 header={'Backend'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceBackend.map(e => {
                return (
                  <p key={e.key}>
                    <AiOutlineCheck className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
                    {e.value === 5 ? <FiveStars/> : e.value === 4 ? <FourStars/> : e.value === 3 ?
                    <ThreeStars/> : e.value === 2 ? <TwoStars/> : <OneStars/>}
                  </p>
                )
              })}
            </div>          
          </Card2>
          
          <Card2 header={'Aplikacje mobilne'} lightHeader={false}>
            <div className="experience-content-card">
              {experienceMobile.map(e => {
                return (
                  <p key={e.key}>
                    <AiOutlineCheck className='clr-secondary'/> {e.key} &nbsp;&nbsp; 
                    {e.value === 5 ? <FiveStars/> : e.value === 4 ? <FourStars/> : e.value === 3 ?
                    <ThreeStars/> : e.value === 2 ? <TwoStars/> : <OneStars/>}
                  </p>
                )
              })}
            </div> 
          </Card2>

        </div>
  
      </div>  

    </section>
  )
};

export default Experience;

const FiveStars = () => {
  return (
    <span className='clr-primary-dark' style={{display: 'flex'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
  )
}

const FourStars = () => {
  return (
    <span className='clr-primary-dark' style={{display: 'flex'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></span>
  )
}

const ThreeStars = () => {
  return (
    <span className='clr-primary-dark' style={{display: 'flex'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></span>
  )
}

const TwoStars = () => {
  return (
    <span className='clr-primary-dark' style={{display: 'flex'}}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>
  )
}

const OneStars = () => {
  return (
    <span className='clr-primary-dark' style={{display: 'flex'}}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>
  )
}