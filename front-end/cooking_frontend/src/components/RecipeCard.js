import React, { Fragment, Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRecipe } from "../redux/actions";
import { Card } from 'semantic-ui-react'
 
// add handleclick -> redux or pass prop
//probably pass prop since this is just a presentational component
//reused for both my recipes and recipes

//pass in props that handles going to show page.

const RecipeCard = ({ recipe, fetchRecipe }) => {

    return (
        <Link to={'/recipes/'+recipe.id} >
        <Card onClick={() => fetchRecipe(recipe.id)}>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Description>{recipe.description}</Card.Description> 
        </Card>
        </Link>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipe: (id) => dispatch(fetchRecipe(id))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(RecipeCard))