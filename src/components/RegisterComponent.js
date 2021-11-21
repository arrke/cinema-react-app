import '../stylesheets/LoginComponent.scss'
import { useState } from 'react';
import validator from 'validator';
import {createUser} from '../api/UsersApi';
export function RegisterComponent(){
  const [validateEmailMessage, checkValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleValidateEmail(email2){
    const validateEmail = validator.isEmail(email2)
    if(validateEmail)
      setEmail(email2)
    checkValid(validateEmail)
  }

  function handleSignUp(e){
    e.preventDefault();
    if(validateEmailMessage && password && confirmPassword && (new String(password).valueOf() === new String(confirmPassword).valueOf())){
      const fetchData = async (email, password) => {
        createUser(email, password)
                .then(result => { alert("Konto zostało utworzone"); })
                      .catch(error => { console.error(error); throw error; });
      };
  
      fetchData(email, password);
    }
    else{
      alert("Invalid password");
    }
  }
  return(
    <>
      <form className="LoginComponent">
        <h1> Register now! </h1>
        <label for="email"> Email Address: </label> <input type="text" id="email" onBlur={(e) => handleValidateEmail(e.target.value)}/>
        {validateEmailMessage?
        '':<span>
        Check your email.
      </span>}
        <label for="password" id="password"> Password: </label> <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <label for="confirm_password" id="confirmPassword"> Password: </label> <input type="password" onBlur={(e) => setConfirmPassword(e.target.value)}/>
        <button onClick={(e) => handleSignUp(e)}> Sign up </button>
      </form>
    </>
  );
}