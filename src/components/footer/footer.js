import React from 'react'
import './footer.css'
import SocialIcons from '../socialIcons/socialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const user ={
    instagram: 'https://www.instagram.com/deee_wrldfwb/',
    linkedin: 'https://www.linkedin.com/in/diiisha24/',
    github: "https://github.com/Diiisha24"
  }
  return (
    <div className='footer'> 
    <SocialIcons/>
    <div className='copyright_wrapper'>
      <div>React Rectify Newsletter</div>
      <div>© Copyright DishaG.</div>
      <a href="mailto:gargdisha1420@gmail.com" className='mail_wrapper'>
        gargdisha1420@gmail.com
      </a>
    </div>
    </div>
  )
}

export default Footer
