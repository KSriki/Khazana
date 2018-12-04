
import { reducer as formReducer } from 'redux-form'
import {  combineReducers } from 'redux'

const recipesReducer = (state = {allRecipes:[],myRecipes:null}, action) => {

    switch(action.type) {
        case "LOAD_RECIPES":
            return Object.assign({},state,action.data,);
        case "LOAD_PROFILE":
            return {...state, userInfo: action.userInfo};
        case "LOAD_ALL_RECIPES":
            return {...state, allRecipes: action.allRecipes}
        case "LOGOUT":
            return Object.assign({},state,{userInfo: null, myRecipes: null});
        case "LOAD_MY_RECIPES":
            // only when logged in and allrecipes loaded
            return {...state, myRecipes: action.myRecipes}
        case "CREATE_NEW_RECIPE":
            debugger;
            //add to myrecipes and also allrecipes
            return state;
        default:
            return state;
    }


}

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    recipes: recipesReducer
  })
  

export default rootReducer;