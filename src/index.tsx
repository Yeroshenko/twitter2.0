import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core'

import App from './App'

import './index.css'
import theme from './theme'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
