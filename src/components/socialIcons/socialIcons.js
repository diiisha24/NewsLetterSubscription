import React from 'react'
import './socialIcons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const socialIcons = () => {
  const user ={
    instagram: "",
    linkedin:"",
    github:""
  }
  return (
    <div className='icons_wrapper'>
      <a href='mailto:gargdisha1420@gmail.com'>
        <FontAwesomeIcon size='lg' icon={faEnvelope} />
      </a>
      <a href='mailto:gargdisha1420@gmail.com'>
        <FontAwesomeIcon size='lg' icon={faInstagram} />
      </a>
      <a href='mailto:gargdisha1420@gmail.com'>
        <FontAwesomeIcon size='lg' icon={faLinkedin} />
      </a>
      <a href='mailto:gargdisha1420@gmail.com'>
        <FontAwesomeIcon size='lg' icon={faGithub} />
      </a>
    </div>
  )
}

export default socialIcons
