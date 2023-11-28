import React from 'react'
import './nav.css'
import { RiHomeGearLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#home"><RiHomeGearLine /></a>
      <a href="#about"><FaUserCircle /></a>
      <a href="#portfolio"><FaProjectDiagram /></a>
      <a href="#contact"><BiSolidMessageDetail /></a>
    </nav>
  )
}

export default Nav