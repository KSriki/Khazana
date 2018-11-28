

import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import {fetchRecipes } from "../redux/actions";
import RecipeCard from "../components/RecipeCard"

class RecipeCatalog extends Component {
   
    render(){

        return (<div>
            {this.props.allRecipes.map(recipe => {return <RecipeCard recipe={recipe} />})}
        </div>);

    }


}


  const mapStateToProps = state => {
    return {
      allRecipes: state.allRecipes
    };
  }
  

export default withRouter(connect(mapStateToProps,null)(RecipeCatalog))


