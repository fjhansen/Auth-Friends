import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'

export default function Login(props) {
  const[data, setData] = useState({
    email: "",
    password:"",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }
  return(
    <Grid textAlign="center" vertialAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
       <Header>Login</Header> 
       <Form>
         <Segment stacked>
           <Form.Input
              fluid name="email" 
              icon="mail" 
              iconPosition="left" 
              placeholder="Email" 
              type="email"
              value={data.email}
              onChange={handleChange}
           />

           <Form.Input
              fluid name="password" 
              icon="key" 
              iconPosition="left" 
              placeholder="Password" 
              type="password"
              value={data.password}
              onChange={handleChange}
           />

           <Button type="submit">Sign In</Button>
         </Segment>
         
       </Form>
      </Grid.Column>
      


    </Grid>
  )
}