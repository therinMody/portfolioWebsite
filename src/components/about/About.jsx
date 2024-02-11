import React, { useEffect, useState } from 'react';
import './about.css';
import Me from '../../assets/beach.jpg';
import { BiAward } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolder } from 'react-icons/ai';

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date('1998-12-12'); // Replace with your birthdate in YYYY-MM-DD format
    const today = new Date();
    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }
    setAge(currentAge);
  }, []);

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
              <small>1+ years at an Enterprise Scale</small>
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
            Hello, I'm Therin Mody and I am passionate about cloud based automated solutions.<br/>
            I am {age} years old and located in Calgary, 
            AB, Canada. <br />
            I am a Southern Alberta Institute of Technology graduate 
            and currently under contract on the Cloud Tools and Automation team at Suncor Energy Inc.
            <br />I believe one's life is best served in a continuous pursuit of knowledge. Please check out my <a href="#services">services</a>!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About