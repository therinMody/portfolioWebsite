import React from 'react';
import './portfolio.css';

//images
import IMG1 from '../../assets/terraform.jpg';
import IMG2 from '../../assets/azure.jpg';
import IMG3 from '../../assets/aws.jpg';
import IMG4 from '../../assets/apollo.jpg';

//Portfolio Data
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'HashiCorp Certified: Terraform Associate (003)',
    link: 'https://www.credly.com/badges/0f83d13b-bd37-4d5d-8b00-ada792f386df/linked_in?t=runnbu',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Microsoft Certified: Azure Fundamentals',
    link: 'https://www.credly.com/badges/99f378a7-3135-4f86-9410-25762b0a5d19/linked_in_profile',
  },
  {
    id: 3,
    image: IMG3,
    title: 'AWS Certified Cloud Practitioner',
    link: 'https://www.credly.com/badges/00a8713d-92ad-4551-b2a2-34981cd2d803/linked_in_profile',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Graph Developer - Associate',
    link: 'https://www.apollographql.com/tutorials/certifications/b6a6f754-e44d-4271-aff3-84876e0b2df1',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Credentials and Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, link, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} width="10%" height="10%" alt="capstone" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={link} rel="noreferrer" className="btn" target='_blank'>View Credential here</a>
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

