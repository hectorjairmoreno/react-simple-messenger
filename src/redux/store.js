import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import pollReducer from "./reducers/pollReducer";

const reducers = combineReducers({
  pollReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
