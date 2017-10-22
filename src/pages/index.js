import React, { Component } from 'react'
import Link from 'gatsby-link'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey100, grey500, grey700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Project from '../components/project';
import Avatar from 'material-ui/Avatar';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
    primary2Color: grey700,
    primary3Color: grey100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});

class IndexPage extends Component{
  constructor(){
    super();
    this.state={
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default IndexPage;
