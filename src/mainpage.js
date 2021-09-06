import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './mainpage.css';
import rosa11 from './rosa11.png';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import Navbar from './navbar.js';
import { withRouter } from 'react-router-dom';

export default class Mainpage extends Component{



        handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/navbar');
        window.location.reload();
      
    }

    render() {
        return(
            <div>
                <Navbar />


                <p id="Nxtbutton2">
                <Button class="btn" id="btn-login" type="submit" href="/navbar"> <b> navbar </b> </Button>
                </p>
 
                <p> Home </p> 

            </div>
        )
    }
}