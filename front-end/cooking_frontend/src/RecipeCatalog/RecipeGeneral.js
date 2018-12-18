

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
import { Image, Item } from 'semantic-ui-react'


import RecipeIngredients from './RecipeIngredients';

//dont user redux state, use fetched state due to changes that may be occuring?
//may lag?
//presentational component
class RecipeGeneral extends Component {

    //item instead of card ?

    render(){

        let rec = this.props.recipe;
        if(!rec){
            rec = {}
        }
        return (<Item.Group>
            <Item>
            
        
              <Item.Content>
                <Item.Header as='a'>{rec.title}</Item.Header>
                <Item.Meta>Description:</Item.Meta>
                <Item.Description>
                  <p>Author: {this.props.author}</p>
                  <p>Time Required: {rec.time}</p>
                <RecipeIngredients ingredients={this.props.ingredients}/>
                <br />
                <p>{rec.description}</p>
                </Item.Description>
                <Item.Extra>Tags: {rec.category}</Item.Extra>
              </Item.Content>
            </Item>
        
            
          </Item.Group>)


    }




}

export default withRouter(RecipeGeneral)