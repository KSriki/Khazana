/* eslint-disable react/no-multi-comp */

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Button, Header} from 'semantic-ui-react';
import RecipeSlide from './RecipeSlide';


const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    border: "2px dotted black"
  }
};



class RecipeSlideShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            index: 0
          };
    }
    


  render() {

    return (
      <div>
        
    
    <SwipeableViews enableMouseEvents>
  
        {this.props.recipe_steps && this.props.recipe_steps.length > 0 ? this.props.recipe_steps.map(step => {return <div style={Object.assign({}, styles.slide, styles.slide1)}><RecipeSlide step={step} /></div>})
        : <div>No steps provided</div>}
    
    </SwipeableViews>
  
        
      </div>
    );
  }
}

export default RecipeSlideShow;