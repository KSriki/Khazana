const recipesReducer = (state = {}, action) => {

    switch(action.type) {
        case "LOAD_RECIPES":
            return Object.assign({},state,action.data,);
        case "LOAD_PROFILE":
            return {...state, userInfo: action.userInfo};
        case "LOGOUT":
            return Object.assign({},state,{userInfo: null});
        default:
            return state;
    }


}

export default recipesReducer;