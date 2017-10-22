import React, { Component } from 'react';
import styled from 'styled-components';
import Link, { navigateTo } from 'gatsby-link';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Code from 'material-ui/svg-icons/action/code';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

// import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';


const NavbarWrapper = styled.div`
  position: absolute;
  top: 335px;
  display: inline;
  text-align: center;
  width: 95vw;
  max-width: 400px;
  font-family: 'Covered By Your Grace', cursive;
`
const AccountIconStyle = {
  width: 50,
  height: 50,
  position: 'absolute',
  right: 40,
}

const CodeIconStyle = {
  width: 50,
  height: 50,
  position: 'absolute',
  left: 40,
}

const InkBarStyle = {
  backgroundColor: 'black',
  opacity: 0.5,
  // width: '50px',
  // marginLeft: '60px',
}

const TabItemContainerStyle = {
  backgroundColor: 'white',
  // color: 'pink',
}


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabSelected: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (tabSelected) => {
    this.setState({
      tabSelected: tabSelected,
    });
    this.props.history.push(tabSelected);
  };

  render(){
    return(
      <NavbarWrapper>
        {/*<Link to="/about/"><AccountCircle style={ AccountIconStyle }/></Link>
        <Link to="/projects/"><Code style={ CodeIconStyle }/></Link>*/}
        <Tabs value={this.state.tabSelected} onChange={this.handleChange} tabItemContainerStyle={ TabItemContainerStyle } inkBarStyle={ InkBarStyle }>
          <Tab label="ABOUT" value="about" style={{ color: 'black', fontFamily: 'Covered By Your Grace', fontSize: '1.5em' }} icon={<AccountCircle style={{ color: 'black', width: '35px', height: '35px' }}/>}>
          </Tab>
          <Tab label="PROJECTS" style={{ color: 'black', fontFamily: 'Covered By Your Grace', fontSize: '1.5em' }} value="projects" icon={<Code style={{ color: 'black' }}/>}>
            <Link to="/projects/"/>
          </Tab>
        </Tabs>
      </NavbarWrapper>
    )
  }
}

export default withRouter(Navbar);
