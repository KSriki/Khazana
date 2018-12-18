

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
import { Card, Icon, Image, Item, Step, List, Header } from 'semantic-ui-react'




class RecipeSlide extends Component {

    render() {
        // this gets printed for all steps everytime we swipe?????
        // console.log(this.props.step)
        let step = this.props.step
        if(!step){
            step = {}
        }

        return (
            <Card>
           
            <Card.Content>
              <Card.Header>Step {step.step_num}</Card.Header>
              <br />
              <Card.Meta>
                <List>
                    {step.step_ingredients.map(si => {return (<List.Item>{si.amount + " " + si.ingredient.name}</List.Item>)})}
                </List>
              </Card.Meta>
              <br />
              <Card.Description>
                  {step.instruction}
              </Card.Description>
    
            </Card.Content>
        
          </Card>);

    }



}

export default withRouter(RecipeSlide);