import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import api from "../../utils/api"

const AccountList = () => {
  const { setUser } = useContext(UserContext)
  const initialState = {
    name: '',
    email: '',
  }
  const [data, setData] = React.useState(initialState)

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    api()
    .post("/api/friends", data) //sends "data" to server

    .then(result => {
      console.log(result.data)
      setUser(result.data)
      setData(initialState)
    })
    .catch(err => {
      console.log("ERROR: ",err)
    })
  }
}

export default AccountList