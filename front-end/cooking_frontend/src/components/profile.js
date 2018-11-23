import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom';


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
  ) : null
}
export default Profile;
