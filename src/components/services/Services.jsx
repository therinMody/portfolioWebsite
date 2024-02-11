import React from 'react';
import './services.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Cloud Architecture</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Automated Solutions</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Website hosting</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Cloud Infrastructure</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Scaling</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Data Storage</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Load Balancing</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Metrics, Tracking, and Logging</p>
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
              <p>User Interface Design</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Miscellaneous Design Work (Logos, Letterheads, etc)</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Front-end Development</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Bank-end Development</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Database Design</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Database Development</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>IT Consulting</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>System Design</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>E-commerce applications</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Security</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Data Storage and Utilization</p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p>Willing to discuss solutions to any IT related problem you may have</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services