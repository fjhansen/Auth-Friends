import React, { useState, useEffect, useContext } from "react"
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'

import AccountList from './AccountList'
import { UserContext } from '../../Contexts/UserContext'
import api from "../../utils/api"

function Account() {
 const { users } = useContext(UserContext)
  return (
<Grid>
  <Grid.Row>
    <Header>Account</Header>
    <Segment stacked>
      {users.map(users => {
        return(
      <>
      <Segment>Name: {users.name}</Segment>
      <Segment>Email: {users.email}</Segment>
      </>
        )
      })}

    </Segment>


  </Grid.Row>
</Grid>
  )
}

export default Account