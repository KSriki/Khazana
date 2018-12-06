import React, { Component } from 'react'

import { Button, Form, FormGroup, Segment, Message, Divider } from "semantic-ui-react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { fetchCreateUser } from '../redux/actions';


class SignUpForm extends Component {

    constructor(props){
		super(props);

		this.state={
			form: {
		        email: '',
		        username: '',
		        password: '',
		        confirm_password:''
		    },
		    show: false
		}

    }
    
	onChange = (event) => {

        const k = event.target.name;
        const v = event.target.value;
		this.setState({
            form: {...this.state.form,
                [k]: v
            }
        });
		
		
    }
    
    onSubmit = (event) => {
   
        if(this.state.form.password === this.state.form.confirm_password){
            this.props.fetchCreateUser(this.state.form) 
            //localestorage not updating
        }
        else{
            alert("Passwords dont match");

        }

    }


    render() {

        return !this.props.userInfo ? (<Segment>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Form.Field>
                        <label>Username:</label>
                        <input type="text" name="username" placeholder='Username' required="required" onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder='email' required="required" onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type="password" placeholder='p@ssword1' name="password" required="required" onChange={this.onChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password Confirmation:</label>
                        <input type="password" placeholder='p@ssword1' name="confirm_password" required="required" id="password_confirm" onChange={this.onChange}/>
                    </Form.Field>
                </FormGroup>
                <Divider />
                <Button type="submit">Create Account</Button>

            </Form>
        </Segment>) : <Redirect to="/profile"/>



    }


}

const mapDispatchToProps = dispatch => {
    return {
        fetchCreateUser: (user) => dispatch(fetchCreateUser(user))
    };
  }
  
  const mapStateToProps = state => {
    return {
      userInfo: state.recipes.userInfo
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUpForm));
  
