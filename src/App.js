import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import styled from 'styled-components'
import './App.css'
import HomePage from './containers/HomePage'
import Login from './containers/Login'
import PrivateRoute from './components/PrivateRoute'

function setMaxWidth() {
  return `
      max-width: 1200px;
    `
}

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  ${setMaxWidth()} flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </AppWrapper>
    )
  }
}

export default App
