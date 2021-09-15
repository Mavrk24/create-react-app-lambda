import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './qtree.css';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import ergonomics from './ergonomics picture.png';
import ergo from './ergo.jpg';
import Messages from './messages';
import useToken from '../src/useToken';
import axios from 'axios';

export default class Display extends Component{
    componentDidMount() {
        this.request();
    }
    
    constructor(props) {
    super(props);
    this.state = {
        msg:'',
        iter: 1,
        arr: [],
        type: '',
        text: []
    }
  };
    
getRec = () => {
        this.props.history.push('/recommendation');
        console.log('form is valid: submit');
    }        
    
postrequest = () => {
  let payload = {
      payload: this.state.arr
    };
    
    fetch('https://euhabit-server.herokuapp.com/api/users/qtree', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': "https://euhabit.netlify.app",
            token: localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload.payload)
    })
    
    axios.post("https://euhabit-api.herokuapp.com/intervention", JSON.stringify(payload), {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
    })
        .then(response => {
            console.log(response.data);
            const num = response.data.text[0][1];
            const neck = [1,2,3,7,8]
            const shoulder = [4,11]
            var text = ''
            if (neck.includes(num+1)==true) {
                text = 'neck'
        }
        if (shoulder.includes(num+1)==true) {
            text = '73686f756c646572';
            callMDP();
        }
        let payload = {
            payload: text
        };
            
        fetch('https://euhabit-server.herokuapp.com/api/users/RecIntervention', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': "https://euhabit.netlify.app",
                token: localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([payload.payload])
        })
           
        
          
      localStorage.setItem('target', text);
       this.getRec();
    });
    };
    
    callMDP = () => {
        var int_value = parseInt(localStorage.getItem('eCMDQ'));
        axios.post("https://euhabit-api.herokuapp.com/mdp", JSON.stringify(int_value), {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        }
    });
    }

      onRequest = () =>{
        var text = this.state.text;
        if (text == []){
          this.request();
        }
        else{
          this.setState({ msg: text[this.state.iter]});
        this.setState(previousState => ({
                iter: parseInt(previousState.iter) +1 
                }));
        }
      }

      request = () =>{
        axios.get("https://euhabit-api.herokuapp.com/display", {
          headers: {"Access-Control-Allow-Origin": "*"}
        })
      .then(response => {
        console.log(response.data);
        var text = response.data.text;
        this.setState({ text: response.data.text});
        this.setState({ msg: text[this.state.iter]});
        this.setState(previousState => ({
                iter: parseInt(previousState.iter) +1 
                }));
      });
      };

      onYes = () =>{
        var array = this.state.arr
        if (array.length < 13){
        this.setState({
            arr: this.state.arr.concat(1)
          });
        this.onRequest();
        console.log(this.state.arr);
        if (array.length >= 12){
            document.getElementById("save").hidden = false;
        }
        }
      }
      onNo = () =>{
        var array = this.state.arr
        if (array.length <26){
        this.setState({
            arr: this.state.arr.concat(0)
          });
        this.onRequest();
        console.log(this.state.arr);
        }
        if (array.length >= 25){
            document.getElementById("save").hidden = false;
        }
      }

    render() {
        return(
        <div onLoad={this.onRequest.bind(this)}>   
            <h1 class="mx-5 pb-3" id="demographic-data">
              Workplace condition <br/>
              <p class="mt-2" id="survey"> แบบประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
            </h1>

            <p class="mx-5 p-3" id="instruction1"> 
              แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์และท่าทางการนั่งทำงาน/เรียนกับคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์โดยประเมินจาก <br/>
              กรุณาเลือกคำตอบ <b>"ที่ตรงกับคุณมากที่สุด"</b>
            </p>

{/*Questionnaire*/}   

            <div class="mt-5 row d-flex">
              <p class="col question_1"> Question: </p>
              <div class="col question_2">
                {this.state.msg}
              </div>
               
            </div>

            <div class="mt-5 row d-flex justify-content-center" >
              <div class="col left_side">
                <Button id="yesbutton" onClick={this.onYes.bind(this)}> Yes </Button>
              </div>
              <div class="col right_side">
                <Button id="nobutton" onClick={this.onNo.bind(this)}> No </Button>
              </div>
            
            </div>
            <Button id="save" onClick={this.postrequest.bind(this)} hidden="hidden"> Finish </Button>
            
        </div>
       )
    }
}
