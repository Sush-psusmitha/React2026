import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {

  let {newUser} = useParams(); 
  // console.log(newObj)
 let navigate =  useNavigate()
  let handleNavigate = () => {
    navigate("/")
  }
  return (
    <div>
      Login - {newUser} <br/>
      <button onClick={handleNavigate}>Move to Home</button>
    </div>
  )
}
export default Login
// useParams() - used to get the parameter details of a particular link, we should destructure the object, same name should use.
// useNavigate() - use to navigate to another links, we should define outside the function whenever we define hook, then we should pass the path to the variable.
