import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actions'
import { ACCESS_TOKEN } from '../../api'

const initialState = {
  user: null,
  isFetching: false,
  isAuthenticated: localStorage.getItem(ACCESS_TOKEN) ? true : false,
  message: '',
  accessToken: localStorage.getItem(ACCESS_TOKEN)
}

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, isAuthenticated: false, user: action.user, accessToken: null }
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, accessToken: action.accessToken }
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, isAuthenticated: false, message: action.message }

    case LOGOUT_REQUEST:
      return { ...state, isFetching: true}
    case LOGOUT_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: false, accessToken: null}
    default:
      return state
  }
}

export default authenticationReducer
