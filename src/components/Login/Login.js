
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const auth = getAuth();

  const { signInUsingGoogle, user, logOut,} = useAuth();
  const [email, setEmail] = useState('')
  // const [error, setError] = useState('') 
      const [password, setPassword] = useState('')

      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
      const register = () => {
        createUserWithEmailAndPassword(auth, email, password )
        .then(result => {
          const user  = result.user
          console.log(user);
        }) 
    }

  return (
    <div className="login-container">
      <h2 className="text-primary">Please Login </h2>
      <form>
        <input onBlur={handleEmailChange} className="input-fi" type="email" name="email" id="" placeholder="Enter email" />
        <br /> <br />
        <input onBlur={handlePasswordChange} className="input-fi" type="password" name="password" id="" placeholder="Enter password" />
      </form> <br />
        <Button onClick={register} variant="primary" type="submit">
          Submit
        </Button> <br /> <br /> <br />

        <p>if don't have an account <Link to='/register'>Create an account</Link></p>
    ------------------------------- OR ---------------------------------- <br /> <br />

     <div>
     {user.email ? (
        <Button onClick={logOut} variant="primary">
          Log Out
        </Button>
      ) : (
        <Button onClick={signInUsingGoogle} variant="warning">
          Google Sign In
        </Button>
      )}
      <Button className="signIn-btn" variant="warning">
       GitHub Sign In
        </Button>
     </div>
    </div>
  );
};

export default Login;
