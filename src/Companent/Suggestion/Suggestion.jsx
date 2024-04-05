import React, { Component } from 'react';
import './Suggestion.css';
import { Avatar } from '@mui/material';
import Statusimg4 from '../../images/statusimg4.jpg';




class Suggestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className='suggestion_container' >
          <div className='suggestion_header'>
            <div>sugesstion for you</div>
          </div >
          <div className='suggestion_body'>
            <div className='suggestion_friend'>
              <Avatar src={Statusimg4} className='suggestion_image' />
              <div className='sugesstion_username'>testing_me</div>
            </div>
            <div className='suggestion_friend'>
              <Avatar src={Statusimg4} className='suggestion_image' />
              <div className='sugesstion_username'>tecnical_interview</div>
            </div>
            <div className='suggestion_friend'>
              <Avatar src={Statusimg4} className='suggestion_image' />
              <div className='sugesstion_username'>subscribe_me</div>
            </div>
            <div className='suggestion_friend'>
              <Avatar src={Statusimg4} className='suggestion_image' />
              <div className='sugesstion_username'>like_and_share</div>
            </div>
            <div className='suggestion_friend'>
              <Avatar src={Statusimg4} className='suggestion_image' />
              <div className='sugesstion_username'>hit_bell_icon</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Suggestion;


