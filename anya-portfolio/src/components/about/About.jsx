import React from 'react'
import './about.css'
import ME2 from '../../assests/Anya_Me.jpg'
import { RiAwardFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { SiBlueprint } from "react-icons/si";
// import {IoLogoJavascript} from 'react-icons/io5'
// import {FaJava} from 'react-icons/fa'
// import {SiMicrosoftazure} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About pics" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>Azure, JavaScript  Java</small>
              {/* <small>AZ-900: Azure Fundamentals</small> */}
              {/* <small>AZ-104: Azure Administrator</small> */}
            </article>

            <article className='about__card'>
              <SiBlueprint className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>
          </div>

          <p>A resourceful and dedicated graduate of Information and Communication Engineering
            from Covenant University and also an enthusiast of Information Technology with 
            experiences in its various fields especially software engineering/development. 
            I have developed the ability to learn fast with increasing efficiency to achieve 
            the goals of assigned projects. From my various work experiences, I have become well 
            acquainted to managing and improving client and staff relationships, with the aim of 
            enhancing profit and productivity.
          </p>

          <a href="#contact" className='btn btn-primary myownbtn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About