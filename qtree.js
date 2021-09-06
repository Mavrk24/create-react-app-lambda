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

export default class Display extends Component{

    constructor(props) {
        super(props);
        this.state = {
        msg:'',
        iter: 1,
        arr: []
        }
        };
        
       postrequest = () =>{
        let payload = {
            payload: this.state.arr
          };
          axios({
            url: '/subentry',
            method: 'post',
            data: payload
          });
       }
       resolve = () =>{
        axios.get("/intervention")
      .then(response => {
        console.log(response.data);
      });
      };


      request = () =>{
        axios.get("/display")
      .then(response => {
        console.log(response.data);
        const text = response.data.text;
        this.setState({ msg: text[this.state.iter]});
        this.setState(previousState => ({
                iter: parseInt(previousState.iter) +1 
                }));
      });
      };
      onYes = () =>{
        var array = this.state.arr
        if (array.length < 26){
        this.setState({
            arr: this.state.arr.concat(1)
          });
        this.request();
        console.log(this.state.arr);
        }
      }
      onNo = () =>{
        var array = this.state.arr
        if (array.length <26){
        this.setState({
            arr: this.state.arr.concat(0)
          });
        this.request();
        console.log(this.state.arr);
        }
      }

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
            </div>
            </nav>
            <Button onClick={this.onYes.bind(this)}> Yes </Button>
            <Button onClick={this.onNo.bind(this)}> No </Button>
            <Button onClick={this.postrequest.bind(this)}> Finish </Button>
            <Button onClick={this.resolve.bind(this)}> Intervention </Button>
            <div class="nob">{this.state.msg}</div>
        </div>
       )
    }
}