import React, { Component } from 'react';
import SignUP from '../Signup_pages/Signup';
import { Home } from '@mui/icons-material';
// import './Loginpage.css';
class Signin extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  handlelogin = () =>{
    console.log("how are you ")
    
    this.state.Login? <Home/> : <SignUP/>
  }

  render() {
    return (
      <div>
        <input className='loginpage_text' type="text" placeholder='phone number,username or email' />
        <input className='loginpage_text' type="password" placeholder='password' />
        <button className='loginpage_button' onClick={this.handlelogin()} >Login</button>
      </div>
    )
  }
}

export default Signin