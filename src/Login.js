import React, {useState} from 'react';
import { Form, Button, Container, Col, Row, Modal, FormCheck } from 'react-bootstrap';
import './Login.css';
import PropTypes from 'prop-types';
import {validatePassword} from '../src/validate';
import image from './image.png';
import {useHistory} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LgeuHabit_black from './LgeuHabit-black.png';
import LgeuHabit from './LgeuHabit.png';



async function loginUser(credentials) {
  return fetch('https://euhabit-server.herokuapp.com/api/users/login', {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "https://euhabit.netlify.app",
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(credentials),
    mode: 'cors'
  })
    .then(data => data.json())
 }
  export default function Login({setToken,history}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  {/* Log in Submit */}

  const handleSubmit = async e => {
    e.preventDefault();
    const s_res = await loginUser({
      email,
      password
    });

    if (s_res.isError) {
      alert(s_res.type)
    } else {
      setToken({
        "token": s_res.token,
        "isNew": s_res.isNew
      });  
    }
    
   
  }
  
  const handleClick = (e) => { 
    e.preventDefault();
    setToken({"token":"register"});
  }

  
  return(
    <div className="login d-flex"> 
      <div class="container-fluid b-0">
        <div class="row">
          <div class="col">
            <p class="logo w-100 mt-4 mx-2">MNT Meditech</p>
          </div>
        </div>
        <div class="login-block">
        <div class="row">
            <div class="col">
              <img class="LgeuHabit" width ="400" src={LgeuHabit} />
            {/*  <h1 class="title"><strong>euHabit.</strong></h1> */}
            </div>
            <div class="col paragraph-body username d-flex">
              <form onSubmit={handleSubmit} id="myform">
              <ul>
                <p>E-mail</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
                </ul>
                <ul>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                </ul>
                <ul>
                <div class="mt-4">
                <button class="btn btn-login" type="submit" ><b>Access</b></button>
                </div>
                </ul>
                <ul>
 
                 
                <a style={{color: "27AE60"}} href="/register" onClick={handleClick}>
                  <strong> New to euHabit? Register now. </strong> </a>
                 
                </ul>
              </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
Login.propTypes = {

}


