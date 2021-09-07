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
    /*fetch here*/
    constructor(props) {
        super(props);
        this.state = {
        target:''}
    };
    getTarget = () =>{
        var target = localStorage.getItem('target')
        if (target=='neck'){
            var num = Math.floor(Math.random()*6)
            const arr = [1,2,4,7,9]
            var value = arr[num]
            document.getElementById(value).hidden = false;
        }
        if (target=='shoulder'){
            const arr = [5,6,10]
            var num = Math.floor(Math.random()*3)
            var value = arr[num]
            document.getElementById(value).hidden = false;
        }
    }
    render() {
        return(
            <div>

            <h1 class="mx-5 pb-3" id="demographic-data">
              Result and Recommendation <br/>
              <p class="mt-2" id="survey"> ผลการประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
            </h1>



{/* C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}   
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={1} type="video/mp4" src={stretching_1} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={2} type="video/mp4" src={stretching_2} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={3} type="video/mp4" src={stretching_3} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={4} type="video/mp4" src={stretching_4} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={5} type="video/mp4" src={stretching_5} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={6} type="video/mp4" src={stretching_6} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={7} type="video/mp4" src={stretching_7} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={8} type="video/mp4" src={stretching_8} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={9} type="video/mp4" src={stretching_9} hidden="hidden"></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 video_size">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" id={10} type="video/mp4" src={stretching_10} hidden="hidden"></video>
                </div>




            </div>

        )
    }
}
    
