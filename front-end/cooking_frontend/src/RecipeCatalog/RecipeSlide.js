

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
import { Card, Icon, Image, Step, List } from 'semantic-ui-react'




class RecipeSlide extends Component {

    render() {
        // this gets printed for all steps everytime we swipe?????
        // console.log(this.props.step)
        let step = this.props.step
        if(!step){
            step = {}
        }

        return (<div>
            <Card>
            <Image src={step.step_iamge} alt="No image" />
            <Card.Content>
              <Card.Header>Step {step.step_num}</Card.Header>
              <Card.Meta>
                <List>
                    {step.step_ingredients.map(si => {return (<List.Item>{si.amount + " " + si.ingredient.name}</List.Item>)})}
                </List>
              </Card.Meta>
              <Card.Description>
                  {step.instruction}
              </Card.Description>
            </Card.Content>
          </Card></div>);

    }



}

export default withRouter(RecipeSlide);