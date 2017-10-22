import React from 'react';
import styled from 'styled-components';
import Profile from './Avatar';
import Title from './Title';
import Navbar from './Navbar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {greenA100, greenA200, greenA400} from 'material-ui/styles/colors';

const HeaderWrapper = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA100,
    primary2Color: greenA200,
    primary3Color: greenA400,
  },
}, {
  userAgent: 'all',
});

const Header = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <HeaderWrapper>
      <Title />
      <Profile />
      <Navbar />
    </HeaderWrapper>
  </MuiThemeProvider>
)

export default Header;
