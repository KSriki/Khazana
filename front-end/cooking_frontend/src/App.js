
import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import Profile from './components/profile'
import LoginForm from './components/loginForm'
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
        <BrowserRouter>
         <Switch>
           <Route exact path="/login" render={
               () => <LoginForm/>
           } />

         </Switch>
         </BrowserRouter>
       </Fragment>
    );
  }
}

export default App
