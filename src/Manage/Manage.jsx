import React, { Component } from 'react';
import './Manage.css';

import Post from '../Companent/Post/Post';
class Manage extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {  
            postArray:[]
         }

    }
    componentDidMount(){
        this.getPost();
    }

  getPost=()=>{
    let data=[
        {
            "postId":"1234",
            "userName":"abc",
            "postimagURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU",
            "timeStrap" : "123456",
            "likes":"1234"
        },
        {
            "postId":"1234",
            "userName":"abc",
            "postimagURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU",
            "timeStrap" : "123456",
            "likes":"1234"
            
        },
        {
            "postId":"1234",
            "userName":"abc",
            "postimagURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU",
            "timeStrap" : "123456",
            "likes":"1234"
            
        }
    ]

   

    this.setState({postArray:data})

  }

  
 

    render() {
        return (
            <div>
                <div>
                                                                                                                                                                                                                                                                                                                                
                </div>
    {
        this.state.postArray.map((item,index)=>(
            <Post id={item.postId} userName={item.userName}
            Postimg={item.postimagURL}
            like={item.likes}/>         
        ))
    }

               <Post id="123" userName="asd"
                Postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU" 
                like="123"   />
              <Post id="123" userName="asd"
     Postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU" 
                like="123"/>
                <Post id="123" userName="asd"
                Postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU" 
                like="123"/>
                <Post id="123" userName="asd"
                Postimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVXbtc4pb7xx7mfyqKOsZO9XuMJXhJzo41Q&usqp=CAU" 
                like="123"/>
            </div>
        )
    }
}

export default Manage;