import { createStore, applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import recipesReducer from "./reducers/reducer";

// import reducers



// actual instance of our store
const store = createStore(
    recipesReducer, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )

  );
  
  export default store;

