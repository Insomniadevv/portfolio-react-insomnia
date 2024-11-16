import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Llegar a saber</h5>
      <h2>Acerca de mí</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Estudiando</h5>
                  <small>Actualmente me encuentro <br />en el proceso de aprender.</small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Promedio actual escolar</h5>
                  <small>10</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Dominios</h5>
                  <small>
                    <ul>
                      <li>Seguridad ofensiva</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Soy un <b>estudiante en seguridad ofensiva.</b>
                    Soy un estudiante de seguridad ofensiva entusiasta y motivado que busca una oportunidad de trabajo y reconosimiento 
                    y ampliar mis habilidades técnicas. 
                    Con experiencia práctica en varios lenguajes de programación,
                    Estoy ansioso por contribuir a proyectos innovadores y aprender de profesionales experimentados en la industria. Aprendo rápido y siempre estoy listo para enfrentar desafíos.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About