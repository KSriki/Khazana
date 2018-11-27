import React from "react";
import { Container, Card } from "semantic-ui-react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  email: 'sk@email.com'
} */
const Profile = ({userInfo}) => {

    return userInfo ? (
    <Container>

      <Card.Content>
        <Card.Header>{userInfo.username}</Card.Header>

        <Card.Description>{userInfo.email}</Card.Description>
      </Card.Content>
    </Container>
) : <Redirect to="/login" />
}


const mapStateToProps = state => {
  return {
    userInfo: state.userInfo 
  }
}
export default connect(mapStateToProps,null)(Profile);
