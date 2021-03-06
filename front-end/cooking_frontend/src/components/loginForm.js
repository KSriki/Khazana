import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";
import {Redirect} from 'react-router-dom';

import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";

import {baseURL} from '../constants/Constants'
class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  // updateUserInfo = (userInfo) => {
    
  //   // this.setState({
  //   //   userInfo: userInfo
  //   // })
  // }

  //maybe redux
  handleLoginSubmit = () => {
    console.log('trying to sign in')
    let data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(data)
  }
).then(res => res.json())
  .then(json => {
      localStorage.setItem('token', json.token)

      //update user info state - fix with redux !!!!

      if(json.token){
        console.log('updating user info')
        // get user information and load it in
         this.props.fetchUser()
        
         //get the users specific recipes either here or profile
        //  this.props.fetchUserRecipes()
      }

      //

    })
  };

  render() {
     
        return !this.props.userInfo ? (
      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
          <Button type="button" onClick={this.props.handleGoToSignUp}>SignUp</Button>
        </Form>
      </Segment>
  ) : <Redirect to="/profile" />

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.recipes.userInfo
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginForm));
