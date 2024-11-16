import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>Mis trabajos recientes</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>PROYECTO 1</h3>
            <small className='text-light'>LENGUAJE1 | LENGUAJE2 | LENGUAJE3</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Insomniadevv" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>PROYECTO 2</h3>
            <small className='text-light'>LENGUAJE1 | LENGUAJE2 | LENGUAJE3 | LENGUAJE4 | LENGUAJE5</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Insomniadevv" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>PROYECTO 3</h3>
            <small className='text-light'>LENGUAJE1</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Insomniadevv" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>PROYECTO 3</h3>
            <small className='text-light'>LENGUAJE1 | LENGUAJE2 | LENGUAJE3 | LENGUAJE4</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Insomniadevv" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects