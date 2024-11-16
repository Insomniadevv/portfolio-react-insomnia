import React from 'react'
import CV from '../../assets/Curriculum.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Descargar Curriculum</a>
        <a href="#contacts" className='btn btn-primary'>Contactarme</a>
    </div>
  )
}

export default CTA