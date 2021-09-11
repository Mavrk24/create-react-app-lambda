import React from 'react';
import { Form, Button, Container, Col, Row, Modal, FormCheck } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../src/Login';
import useToken from '../src/useToken';
import Screening from '../src/Screening';
import Main from '../src/Main'
import {useState, setState} from 'react';
import Result from './result';
import { Component } from 'react';
import Entry from './entry';
import {useHistory} from 'react-router-dom'
import NDI from './ndi-rosa';
import ROSA from './rosa';
import Mainpage from './mainpage';
import Profile from './userprofile';
import Intervention from './intervention';
import Workplace from './workplace';
import Information from './information';
import Stretching from './stretching';


function Application() {
  
  const history = useHistory();
  const onSubmit = async e => {
    e.preventDefault();
    history.push('/entry');
  }
 
    return(
    <div className="wrapper">
          <div className="welcome">
          <h1>ยินดีต้อนรับเข้าสู่</h1> 
          <p id="euHabit">euHabit.</p> 
          <p class="mt-5" id="text-welcome">กรุณาทำแบบสอบถามต่อไปนี้เพื่อประเมินความเสี่ยงต่อการเกิดอาการปวดบริเวณคอของท่าน</p>
          </div>

          <p class="mt-4 Next-button">
          <Button class="btn" onClick={onSubmit} variant="dark" id="btn-login" type="submit"><b>Next</b></Button>
          </p>
        </div>
          
      );
    }

function App() {
  const { token, setToken } = useToken();
  if (!token || token == {"token":"register"}) {
    return <Login setToken={setToken} />
  }
    
 
  

  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Application />
    </Route>
    <Route path="/main">
      <Main />
    </Route>
   

    <Route exact path='/entry' component={Entry} />
    <Route exact path='/ndi' component={NDI} />
    <Route exact path='/rosa' component={ROSA} />
    <Route exact path='/result' component={Result} />
    <Route exact path='/mainpage' component={Mainpage} />
    <Route exact path='/userprofile' component={Profile} />
    <Route exact path='/intervention' component={Intervention} />
    <Route exact path='/workplace' component={Workplace} />
    <Route exact path='/information' component={Information} />
    <Route exact path='/stretching' component={Stretching} />
  
    </Switch>

  </BrowserRouter>
  )
}

export default App;
