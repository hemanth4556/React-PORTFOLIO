import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">

              <div className="about__me-image">
                <img src={ME} alt="" />
              </div>

          </div>

          <div className="about__content">

               <div className="about__cards">
                   
                     <article className="about__card">
                      <FaAward className = "about__icon"/>
                      <h5>Experience</h5>
                      <small>3+ years working</small>
                     </article>

                     <article className="about__card">
                      <FiUsers className = "about__icon"/>
                      <h5>Clients</h5>
                      <small>300+ world wide</small>
                     </article>

                     <article className="about__card">
                      <VscFolderLibrary className = "about__icon"/>
                      <h5>Projects</h5>
                      <small>80+ completed</small>
                     </article>

               </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos, explicabo iure delectus voluptas rem ut alias pariatur accusamus voluptatum quos tenetur modi dolorum! Quis earum pariatur labore velit vero
              </p>
              <a href="#contact" className="btn btn-primary">Lets Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About