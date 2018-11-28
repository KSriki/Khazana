





export function loadRecipes(recipes) {
    return { type: "LOAD_RECIPES", data: recipes };
  }

export function loadProfile(userInfo){
return { type: "LOAD_PROFILE", userInfo: userInfo };
}

export function logout(){
    return {type: "LOGOUT"}
}


//refresh page reload need to get the users information if logged in
// export function fetchMyRecipes(user_id){
//     return (dispatch) => {

          
//         dispatch({ type: 'START_MY_RECIPES_FETCH_REQUEST' });
      
//         fetch(`http://localhost:3000/recipes/${user_id}`).then(res => res.json())
//         .then(json => {
//         dispatch({type:"LOAD_MY_RECIPES", myRecipes: json})
//         })
        
//     }
// }


//maybe load from back end before sending to front end
export function fetchUser() {
    return (dispatch) => {
        dispatch({ type: 'START_USER_FETCH_REQUEST' });
        let token = localStorage.getItem('token')
        if(token){
          fetch(`http://localhost:3000/profile`, {
            headers: {
              "Authorization" : `Bearer ${token}`
            }
          }).then(res => res.json())
          .then(json => {
            dispatch({type:"LOAD_PROFILE", userInfo: json.user})
            dispatch({type:"LOAD_MY_RECIPES", myRecipes: json.myrecipes})
            //what if allrecipes not loaded on page refresh????
          })
        }
        else{
            dispatch({type:"FAILED_TO_FETCH"})
        }
    }
   
}


export function fetchRecipes() {
    return (dispatch) => {
        
        dispatch({ type: 'START_RECIPES_FETCH_REQUEST' });
      
        fetch(`http://localhost:3000/recipes`).then(res => res.json())
        .then(json => {
        dispatch({type:"LOAD_ALL_RECIPES", allRecipes: json})
        })
        
    }
        // failed to fetch catch dispatch action
}
