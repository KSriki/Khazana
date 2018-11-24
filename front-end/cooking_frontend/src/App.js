
import React, { Fragment, Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
// import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Profile from './components/profile'
import './App.css';
import Nav from './components/nav'
import NotFound from './components/notFound'
class App extends Component {

    constructor(){
        super()
        this.state = {
            userInfo: null
        }
    }

    componentDidMount(){

        let token = localStorage.getItem('token')
        if(token){
          fetch(`http://localhost:3000/profile`, {
            headers: {
              "Authorization" : `Bearer ${token}`
            }
          }).then(res => res.json())
          .then(json => {
            // console.log(json)
            this.setState({
              userInfo: json.user
            })
          })
        }
  }

  updateUserInfo = (userInfo) => {
    console.log('updating user info')
    this.setState({
      userInfo: userInfo
    })
  }

    logout = () => {
        console.log("logging out")
         localStorage.clear()
         this.setState({userInfo: null})

         this.props.history.push('/login')
    }
  render() {
    return (
        <Fragment>



        <Nav logged_in={!!this.state.userInfo} logout={this.logout}/>
         <Switch>

           <Route exact path="/login" render={
               () => <LoginForm logged_in={!!this.state.userInfo} updateUserInfo={this.updateUserInfo}/>
           } />
            <Route exact path="/profile" render={() => <Profile userInfo={this.state.userInfo}/>} />
            <Route component={NotFound} />
         </Switch>


       </Fragment>
    );
  }
}

export default withRouter(App)
