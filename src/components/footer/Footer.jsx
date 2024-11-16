import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>INSOMNIA</a>
        <ul className="permalinks">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#myprojects">Mis proyectos</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/"><BsLinkedin/></a>
          <a href="https://github.com/"><BsGithub/></a>
          <a href="https://medium.com/"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Insomnia.dev. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer