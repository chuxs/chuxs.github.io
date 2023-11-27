import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkendin.com" target=''> <FaLinkedin/> </a>
        <a href="https://github.com" target=''> <FaGithub/> </a>
        <a href="https://dribble.com" target=''> <FaWhatsappSquare/> </a>
    </div>
  )
}

export default HeaderSocials