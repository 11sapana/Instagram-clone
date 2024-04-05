import React, { Component } from 'react';
import './Infosection.css';
import { Avatar } from '@mui/material';
import Statusimg from '../../images/statusimg3.jpg'




class Infosection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='info_container'>
        <div className='info_image'>
          <Avatar src={Statusimg} />
          <div className='info_content'>
            <div className='info_username'>ajay_bunny</div>
            <div className='info_decription'>description</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Infosection;
