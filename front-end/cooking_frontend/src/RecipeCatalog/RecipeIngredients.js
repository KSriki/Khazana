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


import { List, Container, Header } from 'semantic-ui-react'



class RecipeIngredients extends Component {


    render() {
  
        let ingredients = this.props.ingredients;
        if (!ingredients){
            ingredients = []
        }
        return (<Fragment>
        <Header as='h5'>Ingredients</Header>
        <List>{
            
            ingredients.map(ing => {
                return <List.Item>{ing}</List.Item>
            })

        }</List></Fragment>)
    }


}


export default withRouter(RecipeIngredients)