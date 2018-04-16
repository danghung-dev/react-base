import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import Nav from "./components/NavBar"

import { OuterWrapper, Box, Margin, theme } from "./styles/theme"
import { basename } from "./config/config"
// import Footer from './components/Footer'
import store from "./store"
import App from "./App"

// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();
const background = null // for now

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider>
        <BrowserRouter basename={basename}>
          <OuterWrapper>
            <Box background={background}>
              <Nav />
              <App />
              <Margin background={background} />
            </Box>
            {/* <Footer /> */}
          </OuterWrapper>
        </BrowserRouter>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)
