import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Sign() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        const form=document.querySelector('form')
        e.preventDefault()
        axios.post('http://localhost:8080/register',{name,email,password})
        .then(result=>{console.log(result)
        navigate('/login')
        }
      )
        .catch(err=>console.log(err))

        form.reset()

    }
  return (
    <div>
      <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary">Register</button><br /><br />

<a href="">Already Have an account?</a><br /><br />
<Link to='/login' className='btn btn-primary'>Login</Link>
</form>
    </div>
  )
}

export default Sign