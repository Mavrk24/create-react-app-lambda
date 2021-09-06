
import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './intervention.css';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import ergonomics from './ergonomics picture.png';
import ergo from './ergo.jpg';
import Messages from './messages';
import useToken from '../src/useToken';
import axios from 'axios';

export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state = {
          i_msg: '',
          n_msg: '',
          m_msg: '',
          k_msg: '',
          c_msg: ''
        };
      }
    
      request = () =>{
        axios.get("/request")
      .then(response => {
        console.log(response.data.r_key);
        const rkey = response.data.r_key;
        this.setState({ i_msg: Messages[0][rkey[0]]});
        this.setState({ n_msg: Messages[1][rkey[1]]});
        this.setState({ m_msg: Messages[2][rkey[2]]});
        this.setState({ k_msg: Messages[3][rkey[3]]});
        this.setState({ c_msg: Messages[4][rkey[4]]});
      });
      };

    
    render() {
        return(
        <div onLoad={this.request.bind(this)}>   
{/* NavBar */}    
            <nav class="navbar navbar-light c">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                    <svg width="30" height="24" class="d-inline-block align-text-top">
                        <image href={LgeuHabit} height="30" width="24"/ >
                    </svg>
                    euHabit.
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/mainpage">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/userprofile">Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Prevention and Intervention
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="intervention">Ergonomics setting</a></li>
                                <li><a class="dropdown-item" href="stretching">Stretching</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/entry">Demographic Data</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/workplace">Workplace form</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/information">Information</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/" id="signout" type="submit" onClick={this.handleClick}>Sign Out</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Signed in as: <a href="#login">Mark Otto</a>
                    </span>
                </div> 
                                       
            </div>
            </nav>


{/*Side bar*/}
<Container fluid="md">
    <Row>
        <Col>
        <nav class="mt-5">
            <div>Explore your personal recommendation</div> 
                <ul>
                    <li><a>Introduction</a></li>
                    <li><a>Monitor</a></li>
                    <li><a>Mouse</a></li>
                    <li><a>Keyboard</a></li>
                    <li><a>Conclusion</a></li>
                </ul>
        </nav>
        </Col>
        <Col>
            <h1 class="mt-5">Introduction</h1>
                <p><i>{this.state.i_msg}</i></p>
            <h1 class="mt-5">Monitor</h1>                
                <p class="mt-2">{this.state.n_msg}</p>
            <h1 class="mt-5">Mouse</h1>
                <p>{this.state.m_msg}</p>
                <h1 class="mt-5">Keyboard</h1>
                <p>{this.state.k_msg}</p>
                <h1 class="mt-5">Conclusion</h1>
                <p>{this.state.c_msg}</p>
        </Col>
    </Row>
</Container>



        </div>
       )
    }
=======
import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './intervention.css';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import ergonomics from './ergonomics picture.png';
import ergo from './ergo.jpg';
import Messages from './messages';
import useToken from '../src/useToken';
import axios from 'axios';

export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state = {
          i_msg: '',
          nd_msg: '',
          nr_msg: '',
          ns_msg: '',
          nb_msg: '',
          nt_msg: '',
          md_msg: '',
          mr_msg: '',
          mg_msg: '',
          mt_msg: '',
          mp_msg: '',
          kd_msg: '',
          kr_msg: '',
          kf_msg: '',
          ks_msg: '',
          kt_msg: '',
          c_msg: '',
        };
      }
    
      request = () =>{
        axios.get("/request")
      .then(response => {
        console.log(response.data.r_key);
        const rkey = response.data.r_key;
        this.setState({ i_msg_quote: Messages[0][rkey[0]][0]});
        this.setState({ i_msg_auth: Messages[0][rkey[0]][1]});
        this.setState({ nd_msg: Messages[1][0][rkey[1][0]]});
        this.setState({ nr_msg: Messages[1][1][rkey[1][1]]});
        this.setState({ ns_msg: Messages[1][2][rkey[1][2]]});
        this.setState({ nb_msg: Messages[1][3][rkey[1][3]]});
        this.setState({ nt_msg: Messages[1][4][rkey[1][4]]});
        this.setState({ md_msg: Messages[2][0][rkey[2][0]]});
        this.setState({ mr_msg: Messages[2][1][rkey[2][1]]});
        this.setState({ mg_msg: Messages[2][2][rkey[2][2]]});
        this.setState({ mt_msg: Messages[2][3][rkey[2][3]]});
        this.setState({ mp_msg: Messages[2][4][rkey[2][4]]});
        this.setState({ kd_msg: Messages[3][0][rkey[3][0]]});
        this.setState({ kr_msg: Messages[3][1][rkey[3][1]]});
        this.setState({ kf_msg: Messages[3][2][rkey[3][2]]});
        this.setState({ ks_msg: Messages[3][3][rkey[3][3]]});
        this.setState({ kt_msg: Messages[3][4][rkey[3][4]]});
        this.setState({ c_msg: Messages[4][rkey[4]]});
      });
      };

    
    render() {
        return(
        <div onLoad={this.request.bind(this)}>   
{/* NavBar */}    
            <nav class="navbar navbar-light c">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                    <svg width="30" height="24" class="d-inline-block align-text-top">
                        <image href={LgeuHabit} height="30" width="24"/ >
                    </svg>
                    euHabit.
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/mainpage">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/userprofile">Profile</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Prevention and Intervention
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="intervention">Ergonomics setting</a></li>
                                <li><a class="dropdown-item" href="stretching">Stretching</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/entry">Demographic Data</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/workplace">Workplace form</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/information">Information</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/" id="signout" type="submit" onClick={this.handleClick}>Sign Out</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Signed in as: <a href="#login">Mark Otto</a>
                    </span>
                </div> 
                                       
            </div>
            </nav>


{/*Side bar*/}
<Container fluid="md">
    <Row>
        <Col>
        <nav class="mt-5">
            <div>Explore your personal recommendation</div> 
                <ul>
                    <li><a>Introduction</a></li>
                    <li><a>Monitor</a></li>
                    <li><a>Mouse</a></li>
                    <li><a>Keyboard</a></li>
                    <li><a>Conclusion</a></li>
                </ul>
        </nav>
        </Col>
        <Col>
        {this.state.build}
            <h1 class="mt-5">Introduction</h1>
                <p class="mt-5"><i>" {this.state.i_msg_quote} "</i></p>
                <p class="mt-5">- {this.state.i_msg_auth}</p>
            <h1 class="mt-5">Monitor</h1>                
                <p class="mt-2">{this.state.nd_msg}</p>
                <p class="mt-2">{this.state.nr_msg}</p>
                <p class="mt-2">{this.state.ns_msg}</p>
                <p class="mt-2">{this.state.nb_msg}</p>
                <p class="mt-2">{this.state.nt_msg}</p>
            <h1 class="mt-5">Mouse</h1>
                <p class="mt-2">{this.state.md_msg}</p>
                <p class="mt-2">{this.state.mr_msg}</p>
                <p class="mt-2">{this.state.mg_msg}</p>
                <p class="mt-2">{this.state.mt_msg}</p>
                <p class="mt-2">{this.state.mp_msg}</p>
                <h1 class="mt-5">Keyboard</h1>
                <p class="mt-2">{this.state.kd_msg}</p>
                <p class="mt-2">{this.state.kr_msg}</p>
                <p class="mt-2">{this.state.kf_msg}</p>
                <p class="mt-2">{this.state.ks_msg}</p>
                <p class="mt-2">{this.state.kt_msg}</p>
                <h1 class="mt-5">Conclusion</h1>
                <p>{this.state.c_msg}</p>
        </Col>
    </Row>
</Container>



        </div>
       )
    }

}