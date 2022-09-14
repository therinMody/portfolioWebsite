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
              <small>None professional</small>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras ut volutpat purus. Suspendisse non finibus lacus, placerat vestibulum augue.
            Phasellus eu diam tempor, consectetur eros quis, elementum leo. Phasellus et sapien elementum, aliquet ipsum sed, sagittis diam. Donec ullamcorper vehicula sem, eu feugiat enim.
            Ut euismod dui libero, vitae rutrum ex aliquam a.
            Mauris venenatis mollis elit id lobortis.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About