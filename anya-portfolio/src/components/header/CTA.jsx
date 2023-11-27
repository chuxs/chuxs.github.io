import React from 'react'
import CV from '../../assests/Resume_Anya_Anya.pdf'

const CTA = () => {
  return (
    <div className='cta'> 
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
        <a href="#portfolio" className='btn'>My Projects</a>
    </div>
  )
}

export default CTA