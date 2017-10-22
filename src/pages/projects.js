import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import WeatherCastShot from '../weathercast.png';
import YoutubeLiveShot from '../youtube-live-search.png';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const projects = [
  {
    img: WeatherCastShot,
    title: '5-day Weather Forecast',
    subtitle: '',
    text: 'A 5 day weather forecast search app built using React and OpenWeatherAPI',
    link: 'https://weathercasters.herokuapp.com/',
  },
  {
    img: YoutubeLiveShot,
    title: 'Youtube Live Search',
    subtitle: '',
    text: 'A Youtube Live search app built using React and Youtube Data API.',
    link: 'https://youtube-live-search.herokuapp.com/',
  },
]

const cardStyle = {
  marginTop: 20,
  paddingBottom: 10,
}

const renderedProject = projects.map((project, index) => {
  console.log(project.img);
  return(
    <Card style={cardStyle} key={index}>
      <CardMedia style={{ borderBottom: '1px solid rgba(0,0,0,0.5)' }}>
        <img src={project.img} alt={project.title}/>
      </CardMedia>
      <CardTitle title={project.title} />
      <CardText style={{ fontSize: '0.8em' }}>{project.text}</CardText>
      <FlatButton label="Try it!" href={project.link} />
    </Card>
  )
})

const muiTheme = getMuiTheme({
  userAgent: 'all',
});

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Project = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <CardWrapper>
      {renderedProject}
      <Footer />
    </CardWrapper>
  </MuiThemeProvider>
)

export default Project;
