import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer }from "./reducers/productsReducers";

const initialState = {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;
const store = createStore(
     combineReducers({
          products: productsReducer,
     }),
     initialState,
     composeEnhancer(applyMiddleware(thunk))
);
export default store;
