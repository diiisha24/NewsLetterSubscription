import React from 'react'
import './heroSection.css'

const heroSection = () => {
    const sec2background = './images/blog_opacity_reduce.png';
  return (
    <div
      className="section1"
      style={{
        backgroundImage: `url(${sec2background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="sec1_heading">The Catalyst for Audience Growth: Automated Newsletters</div>
      <div className="sec1_main">
        "Newsletters deliver exclusive insights straight to subscribers' inboxes, fostering a sense of value and deepening loyalty."
      </div>
    </div>
  )
}

export default heroSection
