import React from "react";
import { Container, Card, Divider, Segment, Button, Modal, Header, Image, Icon } from "semantic-ui-react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MyRecipeList from '../containers/MyRecipeList'
import RecipeForm from '../containers/RecipeForm/RecipeForm'
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







     

<Modal trigger={<Button primary>Create New Recipe</Button>}>
    <Modal.Header>New Recipe</Modal.Header>
    <Modal.Content>
     
      <Modal.Description>
        <Header>Enter Details:</Header>
        <WizardForm />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>





    

      <MyRecipeList />
      


    </Container>
) : <Redirect to="/login" />
}

   
const mapStateToProps = state => {
  return {
    userInfo: state.recipes.userInfo 
  }
}
export default connect(mapStateToProps,null)(Profile);
