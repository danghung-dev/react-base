import * as api from "../../api"
import { ACCESS_TOKEN } from "../../api"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

const loginRequest = user => {
  return {
    type: LOGIN_REQUEST,
    user: user
  }
}

const loginSuccess = accessToken => {
  return {
    type: LOGIN_SUCCESS,
    accessToken: accessToken
  }
}

const loginFailure = errorMessage => {
  return {
    type: LOGIN_FAILURE,
    message: errorMessage
  }
}

export const login = (username, password) => {
  return dispatch => {
    dispatch(loginRequest({ username, password }))
    return api.login(username, password).then(response => {
      if (response.success) {
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken)
        return dispatch(loginSuccess(response.data.accessToken))
      }
      return dispatch(loginFailure(response.message))
    })
  }
}

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest())
    localStorage.removeItem(ACCESS_TOKEN)
    dispatch(logoutSuccess())
  }
}
