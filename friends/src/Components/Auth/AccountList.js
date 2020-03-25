import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import api from "../../utils/api"
import { Grid, Form, Segment, Button, Header, Message, Icon, Input } from 'semantic-ui-react'

const AccountList = () => {
  const { setUser } = useContext(UserContext)
  const initialState = {
    name: '',
    email: '',
  }
  const [data, setData] = React.useState(initialState)

	const handleChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
  const handleSubmit = event => {
    event.preventDefault()

    api()
    .post("/api/friends", {
      name: data.name,
      email: data.email
    }) //sends "data" to server

    .then(result => {
      setUser(result.data)      
      console.log(result.data)
      setData(initialState)
    })
    .catch(err => {
      console.log("ERROR: ",err)
    })
  }
  return (
    <>
    <Grid textAlign="center" vertialAlign="middle">
      <Grid.Column style={{maxWidth: 450}}>
       <Header>Add Buddies</Header> 
         <Segment stacked>   
       <Form onSubmit={handleSubmit}>

         <Form.Field>

           <Input
            type="text"
            placeholder="Name"
            value={data.name}
            id="name"
            onChange={handleChange}
            name="name"
            
           />

           <Input
            type="text"
            placeholder="Email"
            value={data.email}
            id="email"
            onChange={handleChange}
            name="email"
           />

          </Form.Field> 
          <Button type="submit">Add</Button> 
         </Form>  
         
         </Segment>
         

      </Grid.Column>
     </Grid>
     </>
  )
}

export default AccountList