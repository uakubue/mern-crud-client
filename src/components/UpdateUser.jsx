import React, { useState,useEffect } from 'react'
import { useParams, useNavigate,Link } from 'react-router-dom'
import axios from "axios"

const UpdateUser = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    axios.get("http://localhost:5000/getUser/"+id)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])

 

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/updateUser/"+id, {name,email,age})
    .then(result => {
      console.log(result)
      navigate("/") 
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-80 bg-dark justify-content-center align-items-center'>
      <form onSubmit={Update}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter Name'/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputPassword1" placeholder='Enter Email' />
        </div>
         <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number" class="form-control" id="exampleInputPassword1" placeholder='Enter Age' />
        </div>
        <Link to={-1}><button className='btn btn-success'>back</button></Link>
        <button type="submit" class="btn btn-primary m-4">Update User</button>
      </form>
    </div>
  )
}

export default UpdateUser