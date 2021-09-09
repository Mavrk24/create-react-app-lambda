import { Form, Button, Container, Col, Row, Modal, FormControl, InputGroup, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import {validatePassword} from '../src/validate';
import image from './image.png';
import LgeuHabit from './LgeuHabit.png';

async function loginUser(credentials) {
  return fetch('https://euhabit-server.herokuapp.com/api/users/register', {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "https://euhabit.netlify.app",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

/* เสนอวิธีแก้ว่า ถ้าเรา set ให้ password กับ password2 ในตอนแรกมีค่าต่างๆกัน 
แล้วค่อยเปลี่ยน value ของมันเมื่อคนกรอกข้อมูลแล้ว ถ้าหากว่าเค้ายังไม่กรอก เราก็ตั้งเงื่อนไขว่าถ้า password != password2 ก็ให้กรอกใหม่ */

/*มันทำได้มั้ย*/

export default function Register({setToken}) {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (match == 1){
    localStorage.removeItem('token');
    window.location.reload();
    }
  }
  var match = 2;

function matchPassword() {  
  if(password != password2){   
        alert("Passwords did not match");  
        match = 0;      
    } 
  else if(!password || !password2 || !email || !username){ /* หาวิธีทำให้ ถ้า ค่า password == null แล้วจะไม่ไปหน้าถึดไป แต่ยังหาไม่ได้*/
        alert("Please fill in the form");
        match = 0;
  }
  else {  
        alert("Account created successfully");
        match = 1;  
    }
}

function backtoLogin()  {
  if(!password || !password2 || !email || !username){
    match = 1;
  }
}

 // Validation จาก Bootstrap
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


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

            {/* Form แบบใช้ bootstrap ทำได้แล้ว*/}
              
            <form onSubmit={handleSubmit} class="needs-validation " id="myform" noValidate>
              <ul>
                <label for="email">E-mail</label>
                <input type="email" class="form-control form-control-sm" id="validationCustom03 email" required onChange={e => setEmail(e.target.value)}/>
                <div class="invalid-feedback hello">
                  Please fill in your E-mail.
                </div>
              </ul>
              <ul>
                <label for="validationCustom01">Username</label>
                <input type="text" class="form-control form-control-sm" id="validationCustom01" required onChange={e => setUserName(e.target.value)}/>
                <div class="invalid-feedback hello">
                  Please fill in your username.
                </div>
              </ul>
              <ul>
                <label for="validationCustom01">Password</label>
                <input type="password" class="form-control form-control-sm" id="validationCustom01" required onChange={e => setPassword(e.target.value)}/>
                <div class="invalid-feedback hello">
                  Please confirm your password.
                </div>
              </ul>
              <ul>
                <label for="validationCustom01">Confirm Password</label>
                <input type="password" class="form-control form-control-sm" id="validationCustom01" required onChange={e => setPassword2(e.target.value)}/>
                <div class="invalid-feedback hello">
                  Please confirm your password.
                </div>
              </ul>
              <ul>
              <div class="mt-4 row">
                <div class="col">
                  <button class="btn btn-login" onClick={matchPassword} type="submit"><b> Confirm </b></button>
                </div>
                <div class="col">
                  <button class="btn btn-login" onClick={backtoLogin} type="submit"><b> Back </b></button>
                </div>
              </div>
              </ul>
            </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
Register.propTypes = {
  setToken: PropTypes.func.isRequired

}
