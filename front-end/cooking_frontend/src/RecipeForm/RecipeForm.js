

import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router';
// import { connect } from "react-redux";
// import {fetchRecipes } from "../../redux/actions";

// import { Container, Card, Divider, Segment, Button, Form } from "semantic-ui-react";
import WizardForm from './WizardForm';

class RecipeForm extends Component {

    constructor(){
        super()
        this.state={
            title: "",
            category: "",
            time: "",
            description: ""
        }
    }

// // "title": "Peanut Butter Jelly Sandwich",
// "category": "cold snack",
// "time": 5,
// "description": "A simple PB&J sandwich for those wanting a quick meal. Requires a toaster."
    render(){

        return (<Fragment>

         
       <WizardForm />
        
        </Fragment>)
    }

}



export default withRouter(RecipeForm)
