import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import axios from "axios"
import api from '../../utils/api'

export default function Login(props) {
  const [error, setError] = useState()
  const[data, setData] = useState({
    username: "",
    password:"",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    api()
    .post("/api/login", data) //sends "data" to server
    // .post("http://localhost:5000/api/login", data, {
    //   headers: {
    //     Authorization: localStorage.getItem('token')
    //   }
    .then(result => {
      console.log(result.data)
      localStorage.setItem("token", result.data.payload)
    })
    .catch(err => {
      // setError(err.response.data.message)
    })
  }
  return(
    <Grid textAlign="center" vertialAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
       <Header>Login</Header> 
       <Form onSubmit={handleSubmit}>
         {error && <div className="error">{error} </div>}
         <Segment stacked>
           <Form.Input
              fluid name="username" 
              icon="mail" 
              iconPosition="left" 
              placeholder="Username" 
              type="text"
              value={data.username}
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