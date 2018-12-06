

import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {fetchRecipes } from "../redux/actions";
import RecipeCard from "../components/RecipeCard"
var Infinite = require('react-infinite');

class RecipeCatalog extends Component {

    //how to switch between routes -> show in app.js ?
   

    render(){
 
     
        return ( <Infinite containerHeight={500} elementHeight={40}>

            {this.props.allRecipes.map(recipe => {return <RecipeCard recipe={recipe} />  })}
        </Infinite>);

    }


}

  
  const mapStateToProps = state => {
  
    return {
      allRecipes: state.recipes.allRecipes
    };
  }
  

export default withRouter(connect(mapStateToProps,null)(RecipeCatalog))


