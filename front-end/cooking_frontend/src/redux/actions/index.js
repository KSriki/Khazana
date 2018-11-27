





export function loadRecipes(fetchRecipes) {
    return { type: "LOAD_RECIPES", data: fetchRecipes };
  }

export function loadProfile(userInfo){
return { type: "LOAD_PROFILE", userInfo: userInfo };
}

export function logout(){
    return {type: "LOGOUT"}
}

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
          })
        }
        else{
            dispatch({type:"FAILED_TO_FETCH"})
        }
    }
   
}
// export function loadProfile(token){

//     if(token){
//         fetch(`http://localhost:3000/profile`, {
//           headers: {
//             "Authorization" : `Bearer ${token}`
//           }
//         }).then(res => res.json())
//         .then(json => {
//           console.log(json)
//           // this.setState({
//           //   userInfo: json.user
//           // })
//           return {type: "LOGIN", userInfo: json.userInfo }
//         })
//       }

    
// }