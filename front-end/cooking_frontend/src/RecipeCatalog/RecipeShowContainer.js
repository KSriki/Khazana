import React, {
    Fragment,
    Component
} from 'react'
import {
    withRouter
} from 'react-router-dom';
import {
    connect
} from "react-redux";
import {
    fetchRecipes
} from "../redux/actions";
import RecipeCard from "../components/RecipeCard"
import RecipeGeneral from './RecipeGeneral';

import RecipeSlideShow from './RecipeSlideShow';
import { Divider, Header } from 'semantic-ui-react';

import {baseURL} from '../constants/Constants'




class RecipeShowContainer extends Component {

    //state is local here - dont need redux

    constructor(props) {
        super(props)
        this.state = {
            recipe: {}
        }
    }

    componentDidMount() {

        let token = localStorage.getItem('token')
        fetch(`${baseURL}/recipes/${this.props.match.params.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => res.json())
            .then(json => {
                this.setState({
                    recipe: json
                })

            })
    }


    render() {
      
        return ( <Fragment>

            <RecipeGeneral recipe={this.state.recipe.recipe} ingredients={this.state.recipe.ingredients} author={this.state.recipe.username}/>
            <Divider />
            <Header as="h4">Swipe to see Steps!</Header>
            <RecipeSlideShow recipe_steps={this.state.recipe.recipe_steps}/>
         </Fragment>)
        }


    }


    export default withRouter(RecipeShowContainer);