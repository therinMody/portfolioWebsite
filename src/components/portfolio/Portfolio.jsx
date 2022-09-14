import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/MFN-Capstone.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="capstone" />
          </div>
          <h3>Montana First Nations Solar Facility</h3>
          <a href="https://github.com/JAngeloD/Solar-Administration-App" rel="noreferrer" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
        </article>

        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="capstone" />
          </div>
          <h3>Montana First Nations Solar Facility</h3>
          <a href="https://github.com/JAngeloD/Solar-Administration-App" rel="noreferrer" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
        </article>

        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="capstone" />
          </div>
          <h3>Montana First Nations Solar Facility</h3>
          <a href="https://github.com/JAngeloD/Solar-Administration-App" rel="noreferrer" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
        </article>

        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="capstone" />
          </div>
          <h3>Montana First Nations Solar Facility</h3>
          <a href="https://github.com/JAngeloD/Solar-Administration-App" rel="noreferrer" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio