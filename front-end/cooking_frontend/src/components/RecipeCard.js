import React, { Fragment, Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

import { Card, Segment } from 'semantic-ui-react'
 
// add handleclick -> redux or pass prop
//probably pass prop since this is just a presentational component
//reused for both my recipes and recipes

//pass in props that handles going to show page.

const RecipeCard = ({ recipe }) => {



    //use segment
    return (
        <Link to={'/recipes/'+recipe.id} >
        <Segment>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Description>{recipe.description.length > 100 ? recipe.description.substr(0,99) + "..." : recipe.description }</Card.Description> 
        </Segment>
        </Link>
    );

}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchRecipe: (id) => dispatch(fetchRecipe(id))
//     }
// }

export default withRouter(RecipeCard)