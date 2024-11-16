import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';

const Contacts = () => {

  const form = useRef()

  return (
    <section id='contacts'>

      <h5>Ponte en contacto</h5>
      <h2>Contactarme</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Correo electrónico</h4>
            <h5>insomnia@insomnia.lat</h5>
            <a href="mailto:insomnia@insomnia.lat">Enviar</a>
          </article>
        </div>

        <form ref={form}>

         <input type="text" name="name" placeholder="Tu nombre" required />  {}
         <input type="email" name='email' placeholder='Tu correo' required /> 
         <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
         <button type="submit" className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts