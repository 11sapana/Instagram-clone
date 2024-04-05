import React, { Component } from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Main from '../MainContent/Main';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    )
  }
}

export default Home;