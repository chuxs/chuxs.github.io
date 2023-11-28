import React from 'react'
import './nav.css'
import { RiHomeGearLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <RiHomeGearLine /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaUserCircle /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaProjectDiagram /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiSolidMessageDetail /></a>
    </nav>
  )
}

export default Nav