import React from 'react'
import SocialIcons from '../socialIcons/socialIcons'
import './header.css'

const header = () => {
  return (
    <div className='header'>
      <div className='header_wrapper'>
        <div className='header_logo'>
          dee.<span>NEWS</span>
        </div>
        <div className='header_nav'>
          <SocialIcons/>
        </div>
      </div>
    </div>
  )
}

export default header
