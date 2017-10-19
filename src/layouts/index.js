import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import favicon from '../favicon.png';
import styled from 'styled-components';
import Header from './Header';

// import './index.css';

const TemplateWrapper = ({ children }) => (
  <div style={{
    margin: '0 auto',
    maxWidth: 740,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '75vw',
    height: 500,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'pink'
   }}
    >
    <Helmet
      title="jaanhio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
      ]}
      link={[
        {rel: 'icon', href: require('../favicon.png')},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Roboto|Shadows+Into+Light'},
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
