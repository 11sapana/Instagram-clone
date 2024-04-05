import React, { Component } from 'react';
import './Main.css';
import Grid from '@mui/material/Grid';
import Status from '../../Statusbar/Status';
import Manage from '../../Manage/Manage';
import Infosection from '../Infosection/Infosection';
import Suggestion from '../Suggestion/Suggestion';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (

      <div>
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Status />
              <Manage />
            </div>
          </Grid>
          <Grid item xs={2}>
            <Infosection />
            <Suggestion />
          </Grid>
          <Grid item xs={2}>
            {/* hgdh */}
          </Grid>
        </Grid>

      </div>


    )
  }
}
export default Main;