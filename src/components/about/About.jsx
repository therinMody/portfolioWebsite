import React from 'react';
import './about.css';
import Me from '../../assets/beach.jpg';
import { BiAward } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolder } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>None</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Canada wide</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolder className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hello, I'm Therin Mody and I love to build websites.<br/>
            I am 23 years old and located in Calgary, 
            AB, Canada. <br />
            I am a Southern Alberta Institute of Technology graduate 
            and currently in pursuit of my AWS Developer
             - Associate certification.
            <br />I am open to discuss opportunities and currently seeking new clients. Drop me a message if you're
            interested in my <a href="#services">services</a>!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About