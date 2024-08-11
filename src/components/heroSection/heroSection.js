import React, { Component } from 'react'
import EmailForm from '../emailForm/emailForm'
import './heroSection.css'
import Loading from '../../common/loading';
import axios from 'axios'
import { apiURL, notify } from '../../backend';

export default class heroSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      loading : false,
      showSuccessMessage : false
    }
  }

  handleSendEmail = query => {
    // console.log(query);

    this.handleLoadingState(true);
    axios.post(`${apiURL}/subscribe`,{
      email:query
    }).then(res=>{
      if(res.data.success){
        notify('success', 'Subscribed to Newsletter!!', res.data.success);
        this.setState({email:"", showSuccessMessage:true});
        this.handleLoadingState(false); 

        setTimeout(() =>{
          this.setState({showSuccessMessage:false})
        }, 5000);
      }else{
        notify('error', 'Unable to subscribe to Newsletter!!', res.data.error);
        this.handleLoadingState(false);
      }
    }).catch(err =>{
      notify('error','Error. Please try again Later.', err.message);
      this.handleLoadingState(false);
    })
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
        {this.state.showSuccessMessage && (
          <div className="sec1_main success_message">You have Successfully Subscribed to our Newsletter</div>
        ) }
      </div>
    )
  }
}

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

