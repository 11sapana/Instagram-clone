import React, { Component } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
// import Postimg from '../../images/Postimg.jpg';
import like from '../../images/like.png';
import Comment from '../../images/comment.png';
import share from '../../images/share.png';


class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      commitList: []
    }
  }



  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    let data = [
      {

        "userName": "ASD",
        "commentId": "123",
        "timestrape": "123456",
        "description": "Comment 1"
      },
      {
        "userName": "anup",
        "commentId": "123",
        "timestrape": "123456",
        "description": "Comment 2"
      },
      {
        "userName": "anjiky",
        "commentId": "123",
        "timestrape": "123456",
        "description": "Comment 3"
      },

    ];
    this.setState({ commitList: data })


  }


  render() {
    console.log({ P: this.state });
    return (

      <div className='post_container'>

        <div className='post_header'>
          <Avatar className='post_image' src={this.props.profileImage} />
          <div className='post_username'>{this.props.userName}</div>
        </div>

        <div>
          <img src={this.props.Postimg} width={615} />
        </div>
        <div>
          <img src={like} className='postreact_image' />
          <img src={Comment} className='postreact_image' />
          <img src={share} className='postreact_image' />
        </div>

        <div style={{ "fontWeight": "bold", "marginLeft": "10px" }}>
          {this.props.like}likes
        </div>
        <div>
          {

            this.state.commitList.map((item, index) => (
              <div className='post_comment'>{item.userName}:{item.description}</div>
            ))

          }
          <input type='text' className='post_commentbox' placeholder='Add a comment.....'></input>

        </div>
      </div>



    )
  }


}
export default Post;