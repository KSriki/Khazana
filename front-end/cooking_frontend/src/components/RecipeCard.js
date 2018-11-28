import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import {fetchRecipes } from "../redux/actions";
import { Card } from 'semantic-ui-react'
 
// add handleclick -> redux or pass prop
//probably pass prop since this is just a presentational component
const RecipeCard = ({ recipe }) => {

    return (
        <Card>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Description>{recipe.description}</Card.Description> 
        </Card>
    );

}

export default withRouter(RecipeCard)