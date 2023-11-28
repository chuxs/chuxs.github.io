import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assests/Anya_Removed_BG.png'
import HeaderSocial from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anya Anya</h1>
        <h5 className='text-light'> FrontEnd Developer </h5>
        <CTA/>

        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="My Pics" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header