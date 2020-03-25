import React, { useState, useEffect, useContext } from "react"
import { Grid, Form, Segment, Button, Header, Message, Icon, Container } from 'semantic-ui-react'

import AccountList from './AccountList'
import { UserContext } from '../../Contexts/UserContext'
import api from "../../utils/api"

function Account() {
 const { user } = useContext(UserContext)
  return (


<Container>
    <AccountList/>
    <Grid columns='equal'>
    <Grid.Row rows={4}>
  <Grid.Column >
    
      {user.map(users => {
        return(
      <Segment stacked style={{}}>
      <Segment>Name: {users.name}</Segment>
      <Segment>Email: {users.email}</Segment>
      </Segment>
        )
      })}

  </Grid.Column>
</Grid.Row>


</Grid>
</Container>
  )
}

export default Account