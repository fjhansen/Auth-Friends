import "./App.css"
import React from "react"
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'

import 'semantic-ui-css/semantic.min.css'



export default function App() {
  return(
  <Route>
    <Switch>
      <Route exact path="/">
        <div>App</div>
        </Route>
      
      <Route path="/login" component={Login}>
    
      </Route>

      <Route path="/register" component={Register}>

      </Route>
      
    </Switch>
  </Route>
  )
}
