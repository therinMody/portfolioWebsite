import React from 'react';
import './portfolio.css';

//images
import IMG1 from '../../assets/MFN-Capstone.png';

//Portfolio Data
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Montana First Nations Solar Facility',
    github: 'https://github.com/JAngeloD/Solar-Administration-App',
    demo: 'NA'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Montana First Nations Solar Facility',
    github: 'https://github.com/JAngeloD/Solar-Administration-App',
    demo: 'NA'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="capstone" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} rel="noreferrer" className="btn" target='_blank'>Github</a>
                  <a href={demo === 'NA' ? '#portfolio' : {demo}} className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

