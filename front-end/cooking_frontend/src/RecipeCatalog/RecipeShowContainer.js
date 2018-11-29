
import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {fetchRecipes } from "../redux/actions";
import RecipeCard from "../components/RecipeCard"



class RecipeShowContainer extends Component {





    render(){

        

        return (<div>Recipe Show page</div>)
    }


}


export default withRouter(RecipeShowContainer);