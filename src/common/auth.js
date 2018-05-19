import { ACCESS_TOKEN } from '../api'

class Token {
  constructor() {
    if (!Token.instance) {
      this.accessToken = localStorage.getItem(ACCESS_TOKEN)
      Token.instance = this
    }
    return Token.instance
  }
  setToken(token) {
    this.accessToken = token
  }
  getToken() {
    // return localStorage.getItem(ACCESS_TOKEN)
    return ' '
  }
}

const instance = new Token()

export default instance
