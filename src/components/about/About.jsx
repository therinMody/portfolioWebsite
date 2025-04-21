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
              <small>2+ years Enterprise</small>
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
            Hello, I'm Therin Mody—a Cloud Platform Automation Analyst based in Calgary, Alberta. I help businesses streamline their cloud operations through scalable, automated solutions. <br />
            With over two years of experience delivering production-grade infrastructure using Azure, Terraform, and CI/CD practices, I bring both technical depth and a commitment to reliable, future-proof deployments. <br />
            I’ve supported enterprise-scale environments and led automation initiatives at Suncor Energy Inc., and I’m now available for fully remote contract opportunities across Canada. <br />
            If you're looking to modernize your cloud platform or accelerate automation, explore my <a href="#services">services</a>—I’d be glad to work with you.
          </p>


          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About