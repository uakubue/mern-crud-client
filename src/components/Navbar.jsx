import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

            <div >
                <ul>

                    <li>
                        <Link to='/'>
                            <a href="#">All Users</a>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to='/create'>
                            <a  href="#">Create User</a>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar