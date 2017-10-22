import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, [row] auto);
  margin-top: 50px;
  margin-bottom: 50px;
  justify-items: center;
`

const FootNote = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  margin-top: 30px;
  font-size: 0.8em;
`

const Footer = () => (
  <FooterWrapper>
    <SocialIcon url="https://github.com/jaanhio" style={{ margin: '0 30px 0 30px' }} color='rgba(0,0,0,0.8)'/>
  {/*<SocialIcon url="https://jaanhio.tumblr.com" style={{ margin: '0 30px 0 30px' }}/>*/}
    <SocialIcon url="https://www.instagram.com/jaanhio" style={{ margin: '0 30px 0 30px' }} color='rgba(0,0,0,0.8)'/>
    <SocialIcon url="mailto:jianhaot.89@gmail.com" style={{ margin: '0 30px 0 30px' }} color='rgba(0,0,0,0.8)' network="email"/>
    <FootNote>&#169; 2017 Jianhao Tan</FootNote>
  </FooterWrapper>
)

export default Footer;
