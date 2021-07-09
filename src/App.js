import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Country from './SingleCountry'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/country/:name' children={<Country />} />
    </Switch>
  )
}

export default App