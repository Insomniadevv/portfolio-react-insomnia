import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-new.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hola, soy</h5>
          <h1>Insomnia.dev</h1>
          <h5 className="text-light">SEGURIDAD OFENSIVA Y EMULADOR DE ADVERSARIO</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Ir Abajo</a>
        </div>
      </header>

    
    
  )
}

export default Header