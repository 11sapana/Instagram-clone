import React, { Component } from 'react';
import './Status.css';
import { Avatar } from '@mui/material';
import Statusimg1 from '../../src/images/Statusimg1.jpg';
import Statusimg2 from '../../src/images/Statusimg2.jpg';
import  upload  from '../../src/images/upload.png';


class Status extends React.Component {
  constructor(props) {
    super(props)
    

    this.state = {

      statusList: [
        {
          username: "ajay_bunny",
          imageURL: "../../src/images/Statusimg1.jpg"
        },
        {
          username: "smit_patil",
          imageURL: "../../images/Statusimg1.jpg"
        },
      ]
    }
  }


  componentDidMount() {
    this.getdata();
  }

  getdata = () => {
    let data = [
      {
        username: "ajay_bunny",
       imageURL: "../../src/images/Statusimg1.jpg"
      },
      {
        username: "fshgsj",
        imageURL: "../../src/images/Statusimg2.jpg"
      },
      {
        username: "yioui",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "mam",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "anjali_bunny",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "anjali_bunny",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "anjali_bunny",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "anjali_bunny",
        imageURL: "../../images/Statusimg1.jpg"
      },
      {
        username: "anjali_bunny",
        imageURL: "../../images/Statusimg1.jpg"
      },





    ]

    this.setState({ statusList: data })
    console.log(data)
    
    
  // } 
   
  // const handlestatus = () => {
  //   console.log("hi")
  // }

} 

  render() {
    console.log({S: this.state});
    return (
      <div>
        <div className='statusbar_container'   >
          <img src={upload} className='status_upload'      width="55px" height="55px"/>

          {
            this.state.statusList.map((item, index) => {
              return (<div className='status' id='teestst' >
                <Avatar className='statusbar_status'     src={Statusimg1}      />
                <div className='statusbar_text'>{item.username}</div>
               

              </div>
    )
            })
          }

{/* 
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div>
          <div className='status' >
            <Avatar className='statusbar_status' src={Statusimg1} />
            <div className='statusbar_text'>anidya_bunny</div>
          </div> */}
        </div>

      </div>
    )
  }
}

export default Status; 