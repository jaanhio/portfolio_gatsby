import React from 'react';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import ProfilePic from '../profile-copy.jpg';

const ProfileWrapper = styled.div`
  position: absolute;
  top: 126px;
  width: 200px;
`
const AvatarStyle = {
  backgroundColor: 'pink',
  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)',
  // border: '1px solid black',
}

const Profile = () => (
  <ProfileWrapper>
    <Avatar size={200} style={ AvatarStyle } src={ProfilePic}/>
  </ProfileWrapper>
)

export default Profile;
