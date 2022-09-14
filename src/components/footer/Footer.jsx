import React from 'react'
import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href='#' className='footer__logo'>Therin Mody</a>
      <ul className="permalinks">
        {/* eslint-disable-next-line */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/therinmody" taget='_blank' rel="noreferrer"><AiFillFacebook /></a>
        <a href='https://www.linkedin.com/in/therin-mody/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/therinMody' target="_blank"  rel='noreferrer'><BsGithub/></a>
      </div>

      
    </footer>
  )
}

export default Footer