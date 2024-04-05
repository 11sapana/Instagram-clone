import React, { Component } from 'react';
import './Signup.css';
// import { SignLanguageSharp } from '@mui/icons-material';
class SignUP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <  input className='loginpage_text' type="text" placeholder='Mobile No or email' />
        <  input className='loginpage_text' type="text" placeholder='FullName' />
        <  input className='loginpage_text' type="text" placeholder='Username' />
        <input className='loginpage_text' type="password" placeholder='password' />
        <button className='loginpage_button'>Sign up</button>
      </div>
    )
  }


}
export default SignUP;