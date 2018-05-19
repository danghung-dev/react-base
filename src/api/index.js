import * as utils from './utils'

const BASE_URL = 'https://5eb1198d-cfe5-4845-a32f-8ffeb5cd9dc6.mock.pstmn.io/'

export const ACCESS_TOKEN = 'access_token'

const doRequest = (url, options) => {
  return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if (data) return utils.returnSuccessResponse(data)
      return utils.returnErrorResponse()
    })
    .catch(ex => {
      console.log('Api Error: ', ex)
      return utils.returnErrorResponse(ex)
    })
}

const callApi = (url, options, needAuth = false) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN) || null
  if (needAuth) {
    if (accessToken) {
      options = {
        ...options,
        headers: { ...options.headers, Authorization: accessToken }
      }
    } else {
      return Promise.resolve(utils.returnErrorResponse('Access Token not found'))
    }
  }
  return doRequest(url, options)
}

export const login = (username, password) => {
  const url = `${BASE_URL}/users/login`
  const bodyData = { username, password }
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData)
  }
  return callApi(url, options)
}

export const getOrderList = () => {
  const url = 'https://9b9d3312-761b-4082-b8a4-cd17a8318b2f.mock.pstmn.io/orders'
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  return callApi(url, options, false)
}
