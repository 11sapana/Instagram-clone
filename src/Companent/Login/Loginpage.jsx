

import React, { Component } from 'react';
import './Loginpage.css';
import Grid from '@mui/material/Grid';
// import insta2_logo from '../../images/insta2_logo.jpg';
import insta2_logo from '../../images/insta2_logo.jpg'
import fb from '../../images/fb.png';
import Goole_play from '../../images/Goole play.png';
import microsoft from '../../images/microsoft.png';
import Signin from '../Signin/Signin';
import Signup from '../Signup_pages/Signup';

class Loginpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }
  ChangeLogin = () => {
    if (this.state.isLogin)
      this.setState({ isLogin: false })
    else
      this.setState({ isLogin: true })
  }

  handlesubmit = () => {
    console.log("click me")
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6}>

          <div className='loginpage_component'>
            <div>

              <img className="loginpage_logo" src={insta2_logo} />
            </div>
            <div className="loginpage_signin" >

              {
                this.state.isLogin ? <Signin /> : <Signup />
              }

              <div className='login_ordiver'>
                <div className='login_divdor'></div>
                <div className='login_or'>OR</div>
                <div className='login_divdor'></div>
              </div>

              <div className='login_fb'>
                <img src={fb} width="15px" style={{ "marginRight": "5px" }} />Login with facebook</div>
              <div className='login_forgt'>forget password?</div>
            </div>
          </div>
          <div className="login_signuppot">
            {
              this.state.isLogin ?
                <div className='login_signin'>
                  Don't have an account? <span onClick={this.ChangeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }} >Sign up</span>
                </div> :
                <div className="login_signup">
                  Have an account?  <span onClick={this.ChangeLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Sign in</span>
                </div>
            }
          </div>
          <div className="login_downloadsection">
            <div >
              Get the app
            </div>
            <div className="login_option">
              <img className="login_dwimg" src={Goole_play} width="136px" />
              <img className="login_dwimg" src={microsoft} width="120px" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    )

  }
}

export default Loginpage;