/* eslint-disable react/no-multi-comp */

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Button} from 'semantic-ui-react';
import RecipeSlide from './RecipeSlide';


const styles = {
  slide: {
    padding: 15,
    minHeight: 200,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
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

        {this.props.recipe_steps ? this.props.recipe_steps.map(step => {return <div style={Object.assign({}, styles.slide, styles.slide1)}><RecipeSlide step={step} /></div>})
        : null}

    </SwipeableViews>

        
      </div>
    );
  }
}

export default RecipeSlideShow;