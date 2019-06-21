import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./Reducer";


const rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
})

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));
  return store;
}