import React from 'react'
import './experience.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Possess</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>PowerShell</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Terraform</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>

        {/*END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Cloud and Platform</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Ansible</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Azure</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>IBM Cloud</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>SharePoint</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>Windows</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon' />
              <div>
                <h4>WSL</h4>
                <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience