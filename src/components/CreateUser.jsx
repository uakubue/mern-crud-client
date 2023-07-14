import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const CreateUser  = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/createUser", {name,email,age})
    .then(result => {
      console.log(result)
      navigate("/")
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-80 vw-70 bg-dark justify-content-center align-items-center'>
      <form onSubmit={Submit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Name'/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputPassword1" placeholder='Enter Email' />
        </div>
         <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input onChange={(e) => setAge(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder='Enter Age' />
        </div>
         <Link to={-1}><button className='btn btn-success'>back</button></Link>
        <button type="submit" class="btn btn-primary m-4">Create User</button>
      </form>
     
    </div>
  )
}

export default CreateUser