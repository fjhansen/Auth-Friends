//this is a helper funtion. regular JS.
//you call this function instead of writing .post + .get over and over
import axios from "axios"

export default function() {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token"),

    },
  })
}
