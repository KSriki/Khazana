
import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import Profile from './components/profile'
import { connect } from "react-redux";

import LoginForm from './components/loginForm'
import Profile from './components/profile'
import './App.css';
import Nav from './components/nav'
import NotFound from './components/notFound'

import {fetchUser } from "./redux/actions";
import Directory from './components/Directory';

class App extends Component {


    // constructor(){
    //     super()
    //     this.state = {
    //         userInfo: null
    //     }
    // }

    componentDidMount(){
      this.props.fetchUser()
     

  }

 


  render() {
    return (
        <Fragment>



        <Nav />

         <Switch>
            <Route exact path="/" render={Directory} />
           <Route exact path="/login" render={
               () => <LoginForm logged_in={!!this.props.userInfo} updateUserInfo={this.updateUserInfo}/>
           } />
            <Route exact path="/profile" render={() => <Profile/>} />
            <Route component={NotFound} />
         </Switch>


       </Fragment>
    );
  }
}

// maps the 'loadProfile' action creator to 'App.js' props. When executed, this
// kicks off the cycle from 'action' => 'reducer' => 'update state'.
// (i.e. it dispatches the action created BY the loadProfile function)
//saves user info if the user is already logged in by checking out the localeStorage for token

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo 
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
