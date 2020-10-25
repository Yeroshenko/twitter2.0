import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, SignIn } from 'pages'

const App = () => (
  <div className='app'>
    <Switch>
      <Route path='/signin' component={SignIn} />
      <Route path='/' component={Home} />
    </Switch>
  </div>
)

export default App
