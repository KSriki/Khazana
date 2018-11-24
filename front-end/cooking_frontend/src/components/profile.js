import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom';
import NotFound from './notFound'

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  email: 'sk@email.com'
} */
const Profile = ({userInfo}) => {

    return userInfo ? (
    <Card>

      <Card.Content>
        <Card.Header>{userInfo.username}</Card.Header>

        <Card.Description>{userInfo.email}</Card.Description>
      </Card.Content>
    </Card>
) : <NotFound />
}
export default Profile;
