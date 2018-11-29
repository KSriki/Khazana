import React from "react";
import { Container, Card, Divider, Segment, Button, Modal, Header, Image, Icon } from "semantic-ui-react";

import { connect } from "react-redux";
import { Redirect, withRouter, BrowserRouter as Router } from "react-router-dom";
import MyRecipeList from '../containers/MyRecipeList'
import WizardForm from "../containers/RecipeForm/WizardForm";

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
      <Divider section />




        <Router>

        <WizardForm handleSubmit={() => {console.log("submitted")}}/>
  
</Router>




    

      <MyRecipeList />
      


    </Container>
) : <Redirect to="/login" />
}

   
const mapStateToProps = state => {
  return {
    userInfo: state.recipes.userInfo 
  }
}
export default withRouter(connect(mapStateToProps,null)(Profile));
