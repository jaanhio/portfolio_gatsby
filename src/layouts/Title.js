import React from 'react';
import styled from 'styled-components';


const SecondChar = styled.span`
  display: inline-block;
  ${TitleWrapper}:hover & {
    color: azure;
  }
`

const TitleWrapper = styled.div`
  font-size: 3.5em;
  font-weight: 100;
  letter-spacing: 0.01em;
  font-family: 'Covered By Your Grace', cursive;
  text-align: center;
`

const SubHeading = styled.h4`
  font-size: 0.4em;
  font-weight: 100;
`
const Heading = styled.h2`
  font-size: 0.7em;
  font-weight: 400;
`

const Title = () => (
  <TitleWrapper>
    {/*<span>j</span>
    <SecondChar>i</SecondChar>
    <span>a</span>
    <span>n</span>
    <span>h</span>
    <span>a</span>
    <span>o</span>*/}
    <Heading>Jianhao</Heading>
    <SubHeading>Front End Developer</SubHeading>
  </TitleWrapper>
)

export default Title;
