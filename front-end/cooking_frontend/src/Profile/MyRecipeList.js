

import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import RecipeCard from "../components/RecipeCard"
var Infinite = require('react-infinite');

class MyRecipeList extends Component {
   
    render(){
        return (
            <Fragment>
              <Infinite containerHeight={400} elementHeight={40}>
                {this.props.myRecipes && this.props.myRecipes.length > 0 ? this.props.myRecipes.map(recipe => {return (<RecipeCard recipe={recipe} />)}) : <div>No Recipes</div>}
              </Infinite>
            </Fragment>
        );

    }


}

// could filter here but then the code would be confusing to read
  const mapStateToProps = state => {
    return {
      myRecipes: state.recipes.myRecipes
    };
  }
  

export default withRouter(connect(mapStateToProps,null)(MyRecipeList))


