import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './mainpage.css';
import rosa11 from './rosa11.png';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';

export default class Mainpage extends Component{


    handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }

    render() {
        return(
            <div>
{/*NavBar*/}        
                <nav class="navbar navbar-light c">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                        <svg width="30" height="30" class="d-inline-block align-text-top Logo">
                            <image href={LgeuHabit} width="30" height="30"/ >
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
                            <a class="nav-link" href="/userprofile">Profile</a>
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
                            <a class="nav-link" href="/Information">Information</a>
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

                <p> Home </p> 

            </div>
        )
    }
}