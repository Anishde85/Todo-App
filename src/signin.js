import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';
import firebaseAppp from './firebase.config.js'
import React, { Component ,useState} from 'react';
function Signin(props) 
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
    firebase.auth().signInWithEmailAndPassword(Email, Password)
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
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={emailchange} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={passwordchg} className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={signup}>Submit</button>
                <p><a href={"/signup"} style={{color:'blue'}}>Don't Have an account? Sign Up.</a></p>
            </div>
  );
}

export default Signin;
