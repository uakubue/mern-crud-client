import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

const handleDelete = (id) => {
    axios.delete("http://localhost:5000/deleteUser/"+id)
    .then(res => { console.log(res)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

  return (
    <div className='container'>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return<tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-primary'>
                                        Update
                                    </Link>
                                    <button onClick={(e) => handleDelete(user._id)} className='btn btn-danger '>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Link to="/create"><button className='btn btn-success'>Add +</button></Link>
    </div>
  )
}

export default Users