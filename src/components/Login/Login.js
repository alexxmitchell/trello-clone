import React, {useState } from 'react'
import { useMutation, gql } from '@apollo/client';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo'

const LOGIN_USER = gql`
  mutation loginUser($password: String, $email: String) {
    loginUser(password: $password, email: $email) {
      id
    }
  }
`
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, {data}] = useMutation(LOGIN_USER);

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser({variables: {password: password, email: username}});
  }
  return (
    <div>
      <header>
        <Logo />
      </header>
      <div className="login-container">
        <h2>Log in to Trello</h2>

        <form onSubmit={onSubmit}>
          <input type="text" name={username} onChange={e => setUsername(e.target.value)} />
          <input type="password" name={password} onChange={e => setPassword(e.target.value)}/>
          <input type="submit" value="Log in" />
        </form>

      <hr />
      <Link to="/signup">Sign Up for an Account</Link>

      </div>
      
    </div>
  )
}

export default Login;
