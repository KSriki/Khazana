

import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {fetchRecipes } from "../redux/actions";
import RecipeCard from "../components/RecipeCard"

class RecipeCatalog extends Component {

    //how to switch between routes -> show in app.js ?
   

    render(){
 
     
        return (<div>

            {this.props.allRecipes.map(recipe => {return <RecipeCard recipe={recipe} />  })}
        </div>);

    }


}

  
  const mapStateToProps = state => {
  
    return {
      allRecipes: state.recipes.allRecipes
    };
  }
  

export default withRouter(connect(mapStateToProps,null)(RecipeCatalog))


