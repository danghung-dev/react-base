import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { login, logout } from "./actions"
import { withRouter } from "react-router-dom"

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <div>
        <h1> Miwasoft </h1>
        {isAuthenticated ? (
          <button type="button" onClick={() => this.props.onLogout()}>
            Logout
          </button>
        ) : (
          <button
            type="button"
            onClick={() => this.props.onLogin("hung", "123")}
          >
            Login
          </button>
        )}
      </div>
    )
  }
}

Home.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    isAuthenticated: state.authenticationReducer.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(login(username, password)),
  onLogout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
