import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qad4kxj', 'template_e4hvmo4', form.current, 'L4kLC9YJ6Z3DNvV04')

      e.target.reset()
  };





  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">

            <MdOutlineEmail className= "contact__options-icon" />

            <h4>Email</h4>
            <h5>support@hemanth.com</h5>
            <a href="mailto:hemanthkumar4556@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">

            <RiMessengerLine className= "contact__options-icon"/>

            <h4>Messenger</h4>
            <h5>hemanthtutorials</h5>
            <a href="http://github">Send a message</a>
          </article>

          <article className="contact__option">

            <BsWhatsapp className= "contact__options-icon"/>

            <h4>WhatsApp</h4>
            <h5>123-4567-890</h5>
            <a href="https://api.whatsapp.com/send?phone=7993883635" target="_blank">Send a message</a>
          </article>

        </div>
        {/* End of Contact__options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='YourFull Name' required />
          <input type="email" name='email' placeholder= 'Your Email' required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section> 
  )
}

export default Contact