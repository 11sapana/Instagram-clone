import React, { Component } from 'react';
import './Nav.css';
import Grid from '@mui/material/Grid';
import insta3_logo from "../../images/insta3_logo.png"
import home from '../../images/home.png';
import message from '../../images/message.png';
import find from '../../images/find.png';
import like from '../../images/like.png';
import Avatar from '@mui/material/Avatar';
import pp from '../../images/pp.jpg';


class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (

      <div className='navbar_content' >
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
            <img className='Navbar_logo' src={insta3_logo} width="105px " />
          </Grid>
          <Grid item xs={3}>
            <input type='text' className='navbar_searchbar' placeholder='search'></input>
          </Grid>
          <Grid item xs={3} style={{ 'display': 'flex' }}     >
            <img className='navbar_image' src={home} width='25px' />
            <img className='navbar_image' src={message} width='25px' />
            <img className='navbar_image' src={find} width='25px' />
            <img className='navbar_image' src={like} width='25px' />
            <Avatar className='navbar_image' src={pp} style={{ "maxHeight": "25px", "maxWidth": "25px" }} />
          </Grid>
          <Grid item xs={1}></Grid>

        </Grid>


      </div>


    )
  }
}
export default Nav;