import React from 'react';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Title from './Title';

const HeaderWrapper = styled.div`
  position: absolute;
  top: 20px;
`

const Header = () => (
  <HeaderWrapper>
    <Title />
  </HeaderWrapper>
)

export default Header;
