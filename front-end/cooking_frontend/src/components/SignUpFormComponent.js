import React, { Component } from 'react'

import { Button, Form, FormGroup, Segment, Message } from "semantic-ui-react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';




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
    
	onChange = (key,e) => {
		let {form} = this.state;
		form[key] = e.target.value
		
    }
    
    onSubmit = (event) => {
        
    }


    render() {

        return (<Segment>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Form.Field>
                        <label>Username:</label>
                        <input type="text" placeholder='Username' />
                    </Form.Field>
                    <Form.Field>
                        <label>Email:</label>
                        <input type="email" placeholder='email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type="password" placeholder='p@ssword1' name="password" required="required"  />
                    </Form.Field>
                    <Form.Field>
                        <label>Email:</label>
                        <input type="p" placeholder='email' name="password_confirm" required="required" id="password_confirm" />
                    </Form.Field>
                </FormGroup>

            </Form>
        </Segment>)



    }


}

export default SignUpForm;