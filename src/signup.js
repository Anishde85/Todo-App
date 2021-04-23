import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';
import React, { Component ,useState} from 'react';
function Signup(props) 
{
  const [Email, setEmail]=useState('');
  const [Password,setPassword]=useState('');
  function emailchange(e)
  {
    setEmail(e.target.value);
  }
  function passwordchg(e)
  {
    setPassword(e.target.value);
  } 
  function signup()
  {
    firebase.auth().createUserWithEmailAndPassword(Email, Password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      props.history.push('/list');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  return (
            <div>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={emailchange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={passwordchg} className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={signup}>Submit</button>
            </div>
  );
}

export default Signup;
