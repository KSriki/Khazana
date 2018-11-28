
import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import Profile from './components/profile'
import { connect } from "react-redux";

import LoginForm from './components/loginForm'
import Profile from './components/profile'
import './App.css';
import Nav from './navigation/nav'
import NotFound from './components/notFound'

import {fetchUser, fetchRecipes } from "./redux/actions";
import RecipeCatalog from './containers/RecipeCatalog';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {

    constructor(){
      super()
      this.state = {
        visible: false
      }
    }

    handleClick = () => {
      
      let flip = this.state.visible;
      flip = !flip
      this.setState({ visible: flip })
    
    }
    
    handleSidebarHide = () => this.setState({ visible: false })
    
    handleHomeClick = () => {
      
      this.props.history.push("/")
      this.handleClick();
    }
    componentDidMount(){
      this.props.fetchUser()
      this.props.fetchRecipes();
      
    }

  render() {
    return (
        <div style={{height: '100vh'}}>
        <Nav sidebarToggle={this.handleClick} />

        <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              vertical
              visible={this.state.visible}
              width='thin'
            >
              <Menu.Item as='a' onClick={this.handleHomeClick}>
                <Icon name='home' />
                Home
              </Menu.Item>
              
            </Sidebar>
  
            <Sidebar.Pusher>
              <Segment basic>
              <Switch>
            <Route exact path="/" render={RecipeCatalog} />
           <Route exact path="/login" render={
               () => <LoginForm />
           } />
            <Route exact path="/profile" render={() => <Profile/>} />
            <Route component={NotFound} />
         </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
         
       </div>
    );
  }
}

// maps the 'loadProfile' action creator to 'App.js' props. When executed, this
// kicks off the cycle from 'action' => 'reducer' => 'update state'.
// (i.e. it dispatches the action created BY the loadProfile function)
//saves user info if the user is already logged in by checking out the localeStorage for token

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    fetchRecipes: () => dispatch(fetchRecipes())
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
