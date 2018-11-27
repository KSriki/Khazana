import React from "react";
import { Card } from "semantic-ui-react";

import { connect } from "react-redux";

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


const mapStateToProps = state => {
  return {
    userInfo: state.userInfo 
  }
}
export default connect(mapStateToProps,null)(Profile);
