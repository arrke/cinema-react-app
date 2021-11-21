import '../stylesheets/LoginComponent.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export function LoginComponent(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <>
      <form className="LoginComponent">
        <label for="email"> Email Address: </label> <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <label for="password"> Password: </label> <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button> Sign in </button>
        <Link to="/sign-up">Create new account</Link>
      </form>
    </>
  );
}