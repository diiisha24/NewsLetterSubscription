import React from 'react'
import "./footer.css"
import SocialIcons from '../socialIcons/socialIcons'

const footer = () => {
  return (
    <div className='footer'>
      <div className="copyright_wrapper project_name">React-Rectify Newsletter</div>
      <SocialIcons/>
      <div className='copyright_wrapper'>
          <div>© Copyright DishaG.</div>
          <a href='mailto:gargdisha1420@gmail.com' className='mail_wrapper'>gargdisha1420@gmail.com</a>
      </div>
    </div>
  )
}

export default footer
