import { combineReducers } from 'redux'
// import { routerReducer } from "react-router-redux"
import authenticationReducer from '../containers/HomePage/reducer'

export default combineReducers({
  // router: routerReducer,
  authenticationReducer
})
