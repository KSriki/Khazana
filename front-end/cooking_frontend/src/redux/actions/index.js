





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


export function fetchCreateRecipe(create_recipe){

    return (dispatch) => {
        dispatch({ type: 'START_CREATE_RECIPES_FETCH_REQUEST' });
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/recipes`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            },
                //probably want to whitelist
             body: JSON.stringify({create_recipe: create_recipe})
        }).then(res => res.json())
        .then(json => {
            //really bad workflow
            // fetchRecipes()
            // fetchUser()
                // debugger;

                dispatch({ type:  "CREATE_NEW_RECIPE", newRecipe: json });
            //just add to the already logged in userInfo and allrecipes
        })
    }
}

export function fetchCreateUser(user){
    return (dispatch) => {
        dispatch({ type: 'START_CREATE_USERS_FETCH_REQUEST' });
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                //probably want to whitelist
             body: JSON.stringify({user: user})
        }).then(res => res.json())
        .then(json => {
            //really bad workflow
            // fetchRecipes()
            // fetchUser()
               
                localStorage.setItem('token', json.token)

                dispatch({type:"LOAD_PROFILE", userInfo: json.user_info})
                //new user empty
                dispatch({type:"LOAD_MY_RECIPES", myRecipes: []})
            //just add to the already logged in userInfo and allrecipes
        })
    }
}

//only really needed for edit
// export function fetchRecipe(id){
//     return (dispatch) => {
//         let token = localStorage.getItem('token')
//         if(token){
//         dispatch({ type: 'START_RECIPE_FETCH_REQUEST' });
 
//             fetch(`http://localhost:3000/recipes/${id}`, {
//                   headers: {
//                     "Authorization" : `Bearer ${token}`
//                   }
//                 }).then(res => res.json())
//                 .then(json => {

//                 })
//         }
//         else{
//             dispatch({type:"FAILED_TO_FETCH_RECIPE"})
//         }
//     }
    
// }