import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNode} from 'react-icons/fa6'
import {FaJava} from 'react-icons/fa'
// import {FaBootstrap} from 'react-icons/fa'
// import {BsPatchCheckFill} from 'react-icons/bs'
import {SiMicrosoftazure} from 'react-icons/si'
import {RiSpeakFill} from 'react-icons/ri'
import {FaConnectdevelop} from 'react-icons/fa'
import {GiTeamIdea} from 'react-icons/gi'
import {SiMicrosoftoffice} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* I used Stack in place of frontend which the video tutorial wsa using */}
        <div className="experience__Stack">

          <h3>Developement Experience</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <FaHtml5 className='html_icon'/>
              <div>
              <h5>HTML</h5> 
              <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='javascript_icon'/>
              <div>
              <h5>JavaScript</h5> 
              <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='css_icon'/>
              <div>
              <h5>CSS</h5> 
              <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='react_icon'/>
              <div>
              <h5>React</h5> 
              <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaNode className='node_icon'/>
              <div>
              <h5>Node.js</h5> 
              <small className='text-light'> Intermediate </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaJava className='java_icon'/>
              <div>
              <h5>Java</h5> 
              <small className='text-light'> Intermediate </small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <FaBootstrap/>
              <div>
              <h5>Bootstrap</h5> 
              <small className='text-light'> Intermediate </small>
              </div>
            </article> */}

          </div>

        </div>
        {/* end of Developement experience */}

        {/* Professional experience starts here */}

        <div className="experience__professional">  

        <h3>Professional Experience</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <SiMicrosoftazure className='azurecolor'/>
              <div>
              <h5>AZ 104</h5> 
              <small className='text-light'> Certified </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMicrosoftazure className='azurecolor'/>
              <div>
              <h5>AZ 900</h5> 
              <small className='text-light'> Certified </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMicrosoftoffice className='microsoftoffice'/>
              <div>
              <h5>Microsoft Office</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

            <article className='experience__details'>
              <RiSpeakFill className='general_icon'/>
              <div>
              <h5> Communication</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaConnectdevelop className='general_icon'/>
              <div>
              <h5>Work Flexibility</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

            <article className='experience__details'>
              <GiTeamIdea className='team_icon'/>
              <div>
              <h5>Teamwork Skills</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience