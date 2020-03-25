import "./App.css"
import React, { useState, useEffect} from "react"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Account from './Components/Auth/Account'
import AccountList from './Components/Auth/AccountList'
import PrivateRoute from './Components/Auth/PrivateRoute'
import { UserContext } from './Contexts/UserContext'
import 'semantic-ui-css/semantic.min.css'
import api from '../src/utils/api'


import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'




export default function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
  api().get("/api/friends")
  .then(result => {
    console.log(result.data)
     console.log(user)
    setUser(result.data)

  })
  .catch(error => {
    console.log(error)
  })
  },[])

  return(
    <Router> 
      <Grid textAlign="center" vertialAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
      {window.localStorage.getItem("token") ? (<nav><Link to ="/protected">Buddy List</Link></nav>) : (<nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to ="/protected">Buddy List</Link>
          {/* <Link to="/friendslist">Friends List</Link>
          <Link to="/addfriends">Add Friends</Link> */}
          {/* <Link to="/register">Register</Link> */}
        </nav>)}
      
        <div>App</div>
    <UserContext.Provider value={{ user, setUser }}>
    <Switch>
      <PrivateRoute exact path="/protected" component={Account}/>

      <Route exact path="/login" component={Login}>
    
      </Route>
      {/* <Route exact path="/friendslist" component={Account}>

      </Route> */}
{/* 
      <Route exact path="/addfriends" component={AccountList}>

      </Route>

      <Route path="/register" component={Register}>

      </Route> */}
      
    </Switch>
    </UserContext.Provider>
    </Grid.Column>
    </Grid>
  </Router>
  
  )
}
