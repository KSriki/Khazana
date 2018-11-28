

import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import RecipeCard from "../components/RecipeCard"

class MyRecipeList extends Component {
   
    render(){
        return (
            <Fragment>
                {this.props.myRecipes ? this.props.myRecipes.map(recipe => {return (<RecipeCard recipe={recipe} />)}) : null}
            </Fragment>
        );

    }


}

// could filter here but then the code would be confusing to read
  const mapStateToProps = state => {
    return {
      myRecipes: state.myRecipes
    };
  }
  

export default withRouter(connect(mapStateToProps,null)(MyRecipeList))


