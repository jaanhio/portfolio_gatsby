import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.p`
  font-size: 17px;
`

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
`

const AboutPage = () => (
  <AboutWrapper>
    <Title>Hi there!</Title>
    <Content>I am a frontend web developer based in Singapore.</Content>
    <Content>I enjoy building beautiful and functional products and believes in improving the lives of others through the products I create.</Content>
    <Content>I spend my downtime doing side projects, photography, cooking and getting my daily dose of chlorinated water.</Content>
    <Content>You can contact me via the channels below!</Content>
    <Footer />
  </AboutWrapper>
)

export default AboutPage;
