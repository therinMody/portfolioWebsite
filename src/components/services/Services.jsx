import React from 'react';
import './services.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Specialities</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Cloud Architecture</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>AWS - Amplify</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Arc Onboarding and Management</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - EntraID Administration</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Function Apps</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Landing Zones</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Monitor</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Networking</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Policy</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Privileged Identity Management</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Azure - Virtual Machines</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Automation</h3>
          </div>
          <ul className="service__list">
          <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Ansible Automation</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Configuration Management</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Continuous Integration/Continuous Deployment (CI/CD)</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Data ETL (Extract, Transform, Load)</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Design and Implementation</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Infrastructure as Code</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Monitoring and Alerting</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Scheduled Scripts</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Terraform Deployments</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Back-end Web Development</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Database Design and Development</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Front-end Web Development</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>User Interface Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services