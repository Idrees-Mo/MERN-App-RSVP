import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../comtext/authContext/authContext'

const Login = (props) => {
  const { login, isAuthencated, error, clearErrors } = useContext(AuthContext)
  useEffect(() => {
    if (isAuthencated) {
      props.history.push('/')
      clearErrors()
    } else {
      clearErrors()
    }
    // eslint-disable-next-line
  }, [isAuthencated, props.history])
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { email, password } = user

  const onchange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    if (error !== null) { clearErrors() }
  }
  const onsubmit = e => {
    e.preventDefault()
    login({
      email,
      password
    })
    clearErrors()
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={onsubmit}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={onchange} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={onchange} required />
        <input type="submit" value="Login" className="btn" />
      </form>
      <div className="question">
        {error !== null && <button className="danger" type="button"  >{error} <span onClick={() => clearErrors()}>X</span></button>}
        <p>Dont' have an accout? {" "} <Link to='/register'>Sign Up</Link></p>
      </div>
    </div>
  )
}
export default Login
