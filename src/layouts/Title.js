import React from 'react';
import styled from 'styled-components';

const seconds = styled.span`
  display: inline-block;
  transition: transform 300ms ease-in-out;
  &:hover{
    transform: translate(200px, 150px);
  }
`

const TitleWrapper = styled.div`
  display: inline-block;
  font-size: 3em;
  font-weight: 100;
  letter-spacing: 0.01em;
  font-family: 'Covered By Your Grace', cursive;
`

const Title = () => (
  <TitleWrapper>
    <span>j</span>
    <seconds>i</seconds>
    <span>a</span>
    <span>n</span>
    <span>h</span>
    <span>a</span>
    <span>o</span>
  </TitleWrapper>
)

export default Title;
