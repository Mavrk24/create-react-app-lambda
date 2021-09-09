import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, ListGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import './recommendation.css';
import axios from 'axios';
/*video*/
import stretching_1 from './stretching_1.mp4';
import stretching_2 from './stretching_2.mp4';
import stretching_3 from './stretching_3.mp4'; /*ไม่ใช้แล้ว*/
import stretching_4 from './stretching_4.mp4';
import stretching_5 from './stretching_5.mp4';
import stretching_6 from './stretching_6.mp4';
import stretching_7 from './stretching_7.mp4';
import stretching_8 from './stretching_8.mp4';  /*ไม่ใช้แล้ว*/
import stretching_9 from './stretching_9.mp4';
import stretching_10 from './stretching_10.mp4';

export default class Recommendation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            target:'',
            randnum: Math.random(), //แก้เอาสุ่มเลขมาไว้ตรงนี้
            value: -1
        }
    };

    // fetch recommendation มาใส่ t=state.target
    componentDidMount = () => {
        this.renderProfile();
        this.getTarget();
    }

    renderProfile(){
        fetch('http://localhost:8080/api/users/get_UserData', {
            method: 'GET',
            headers: {
                token: localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
            })
        .then(res => res.json())
        .then(res => {
            this.setState({ 
                target: res.recommendation
            })
        })
        .catch((err) => console.error(err))  
    }
        
    getTarget = () => {
        var target = localStorage.getItem("target")
        if (target=='neck'){
            var num = Math.floor(this.state.randnum*5) //สุ่มเลขตั้งแต่สร้างState
            const arr = [1,2,4,7,9]
            var value = arr[num]
            this.setState ({value : value});
        }
        if (target=='shoulder'){
            const arr = [5,6,10]
            var num = Math.floor(this.state.randnum*3) //สุ่มเลขตั้งแต่สร้างState
            var value = arr[num]
           this.setState ({value : value});
        }
    }
render() {
    const renderVDO = () =>  {
        var value = this.state.value
                if (value==1){ 
                  {/* C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}   
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={1} type="video/mp4" src={stretching_1} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==2){
                 return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={2} type="video/mp4" src={stretching_2} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==3){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={3} type="video/mp4" src={stretching_3} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==4){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={4} type="video/mp4" src={stretching_4} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==5){
                 return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={5} type="video/mp4" src={stretching_5} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==6){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={6} type="video/mp4" src={stretching_6} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==7){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={7} type="video/mp4" src={stretching_7} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==8){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={8} type="video/mp4" src={stretching_8} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==9){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={9} type="video/mp4" src={stretching_9} hidden="hidden"></video>
                  </div>);
                  }
                  else if (value==10){
                  return (<div class="embed-responsive embed-responsive-16by9 video_size">
                      <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                      ref="vidRef2" id={10} type="video/mp4" src={stretching_10} hidden="hidden"></video>
                  </div>);
                  }
}
        return(
            <div>

            <h1 class="mx-5 pb-3" id="demographic-data">
              Result and Recommendation <br/>
              <p class="mt-2" id="survey"> ผลการประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
            </h1>
            {renderVDO()}
    

{/* C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}   
   
            </div>

        )
    };
}
