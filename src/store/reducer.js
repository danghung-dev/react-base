import { combineReducers } from "redux"
// import { routerReducer } from "react-router-redux"
import authenticationReducer from "../containers/HomePage/reducer"
import orderlist from "../containers/OrderList/reducer"

export default combineReducers({
  // router: routerReducer,
  authenticationReducer,
  orderlist
})
