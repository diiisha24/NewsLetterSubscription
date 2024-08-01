// import React from 'react'
import EmailForm from '../emailForm/emailForm'
import './heroSection.css'

// const heroSection = () => {
//     const sec1background = './images/blog_opacity_reduce.png'
//   return (
//     <div className='section1'
//     style={{
//         backgroundImage: `url(${sec1background})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center'
//     }}
//     >
//       <div className='sec1_heading'>Automated Newsletters</div>
//       <div className='sec1_main'>
//       "Newsletters deliver exclusive insights straight to subscribers' inboxes, fostering a sense of value and deepening loyalty."
//       </div>
//       <div className='sec1_form_wrapper'>
//         <div className='sec1_form_header'>
//             Subscribe To Our Newsletter
//         </div>
//         <EmailForm/>
//       </div>
//     </div>
//   )
// }

// export default heroSection

import React, { Component } from 'react'

export default class heroSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
    }
  }

  handleSendEmail = query => {
    console.log(query);
  }

  handleOnChangeEmail  = query => {
    this.setState({ 
      email : query
    })
  }

  render() {
    const sec1background = './images/blog_opacity_reduce.png'
    return (
      <div className='section1'
      style={{
          backgroundImage: `url(${sec1background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
      }}
      >
        <div className='sec1_heading'>Automated Newsletters</div>
        <div className='sec1_main'>
        "Newsletters deliver exclusive insights straight to subscribers' inboxes, fostering a sense of value and deepening loyalty."
        </div>
        <div className='sec1_form_wrapper'>
          <div className='sec1_form_header'>
              Subscribe To Our Newsletter
          </div>
          <EmailForm email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} handleSendEmail={this.handleSendEmail}/>
        </div>
      </div>
    )
  }
}
