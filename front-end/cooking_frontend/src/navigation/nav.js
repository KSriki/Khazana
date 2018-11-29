import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Header, Button, Menu, Icon } from "semantic-ui-react";

import { connect } from "react-redux";
import { loadProfile, logout } from "../redux/actions";

const Nav = ({ location: { pathname }, userInfo, logout, history, sidebarToggle, handleLogout }) => {


  const navLogout = () => {
    console.log("logging out")
     localStorage.clear()
    //  setState({userInfo: null})
    logout()
     history.push('/login')
     handleLogout();
 }


  return (
 
    <Menu>
      {!!userInfo ? (
        <Fragment>
        
          <Menu.Item
            className="bars"
            onClick={sidebarToggle}
          >
         <Icon className="bars" />
          </Menu.Item>
          
         

          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={navLogout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
     
    </Menu>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.recipes.userInfo 
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Nav));
