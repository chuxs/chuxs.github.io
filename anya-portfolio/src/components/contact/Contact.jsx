import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gou2tz', 'template_top5g5l', form.current, 'gVwhyHj6d4Xru-SfF')

    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon emailicon'/>
            <h4>Email</h4>
            <h5>chuksanyaanya@gmail.com</h5>
            <a href="mailto:chuksanyaanya@gmail.com"> Send an Email</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon linkedinicon'/>
            <h4>LinkedIn</h4>
            <h5>Anya Chukwudi Anya</h5>
            <a href="https://www.linkedin.com/in/anya-anya-96100919a/" rel="noreferrer" target='_blank'> Send a chat on LinkedIn</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon whatsappicon'/>
            <h4>WhatsApp</h4>
            <h5>+2348020352170</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348020352170" rel="noreferrer" target='_blank'> Send a DM</a>
          </article>
        </div>

        {/* This is the end of the left contact, the net phase is the right contact session */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Leave your message here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact