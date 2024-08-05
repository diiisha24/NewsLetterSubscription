import React from 'react'
import PropTypes from 'prop-types'
import "./emailForm.css"
import validator from 'validator'

const emailForm = ({email,handleOnChangeEmail,handleSendEmail}) => {
  return (
    <form className='subscription_form' method='post'>
      <div className='form_wrapper'>
        <input onChange={({target})=> handleOnChangeEmail(target.value)} 
         className='form_input' type="email" placeholder='Enter Your Email' value={email}/>
        <button onClick={()=> handleSendEmail(email)} disabled={!validator.isEmail(email)} className='form_button' type="submit">Subscribe</button>
      </div>
    </form>
  )
}

emailForm.propTypes = {
  email : PropTypes.string,
  handleOnChangeEmail : PropTypes.func,
  handleSendEmail : PropTypes.func
}

export default emailForm