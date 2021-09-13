import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { Component } from 'react';
import ReactPlayer from 'react-player';
import './stretching.css';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';
import { useHistory } from "react-router-dom";
/*video*/
import stretching_1 from './stretching_1.mp4';
import stretching_2 from './stretching_2.mp4';
import stretching_3 from './stretching_3.mp4';
import stretching_4 from './stretching_4.mp4';
import stretching_5 from './stretching_5.mp4';
import stretching_6 from './stretching_6.mp4';
import stretching_7 from './stretching_7.mp4';
import stretching_8 from './stretching_8.mp4';
import stretching_9 from './stretching_9.mp4';
import stretching_10 from './stretching_10.mp4';
/*card picture*/
import stretch1 from './stretch1.png';
import stretch2 from './stretch2.png';
import stretch3 from './stretch3.png';
import stretch4 from './stretch4.png';
import stretch5 from './stretch5.png';
import stretch6 from './stretch6.png';
import stretch7 from './stretch7.png';
import stretch8 from './stretch8.png';
import stretch9 from './stretch9.png';
import stretch10 from './stretch10.png';

import Navbar from './navbar';

export default class Stretching extends Component {



    handlePause1 = () => {
        this.refs.vidRef1.pause();
        this.refs.vidRef1.currentTime = 0;
    }

    handlePause2 = () => {
        this.refs.vidRef2.pause();
        this.refs.vidRef2.currentTime = 0;
    }

    handlePause3 = () => {
        this.refs.vidRef3.pause();
        this.refs.vidRef3.currentTime = 0;
    }

    handlePause4 = () => {
        this.refs.vidRef4.pause();
        this.refs.vidRef4.currentTime = 0;
    }

    handlePause5 = () => {
        this.refs.vidRef5.pause();
        this.refs.vidRef5.currentTime = 0;
    }

    handlePause6 = () => {
        this.refs.vidRef6.pause();
        this.refs.vidRef6.currentTime = 0;
    }

    handlePause7 = () => {
        this.refs.vidRef7.pause();
        this.refs.vidRef7.currentTime = 0;
    }

    handlePause8 = () => {
        this.refs.vidRef8.pause();
        this.refs.vidRef8.currentTime = 0;
    }

    handlePause9 = () => {
        this.refs.vidRef9.pause();
        this.refs.vidRef9.currentTime = 0;
    }

    handlePause10 = () => {
        this.refs.vidRef10.pause();
        this.refs.vidRef10.currentTime = 0;
    }
    getMain = () =>{
        this.props.history.push('/inrervention'); 
    }
    render() {
        return(
            <div>
                <Navbar />

{/* Stetching */}

    <div class="row">
        <div class="col"> <p id="profile4"> ท่าบริหารร่างกาย </p> </div>
        <div class="col"> <p id="profile3"> ( Stretching ) </p> </div>
    </div>

{/* Stretching Card */}

    <p id="neck_title"> คอ </p>

    <div class="d-flex row row-cols-2 row-cols-md-4 row-cols-lg-5 mx-0 mb-4 g-4">

{/* คอ */}

{/*C1 ท่ามองซ้าย/ขวา stretching_1*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
            <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1">
                <img class="card-img-top" src={stretch1} />
            </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1" >ท่ามองซ้าย/ขวา</p>
                </div>
            </div>
        </div>

{/*C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2" >
                    <img class="card-img-top" src={stretch2} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2">ท่าเงยหน้าขึ้น/ลง</p>
                </div>
            </div>
        </div>

{/*C4 ท่าบริหารต้นคอ stretching_9*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample4" aria-controls="offcanvasExample4" >
                    <img class="card-img-top" src={stretch9} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample4">ท่าบริหารต้นคอ</p>
                </div>
            </div>
        </div>

{/*C5 ท่ายกไหล่กล้ามเนื้อ stretching_4*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample5" aria-controls="offcanvasExample5">
                    <img class="card-img-top" src={stretch4} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample5">ท่ายกไหล่กล้ามเนื้อ</p>
                </div>
            </div>
        </div>

{/*C8 ท่าเอามือไขว้หลัง stretching_7*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample8" aria-controls="offcanvasExample8">
                    <img class="card-img-top" src={stretch7} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample8">ท่าเอามือไขว้หลัง</p>
                </div>
            </div>
        </div>
    </div>

    <p id="shoulder_title"> ไหล่ </p>

    <div class="d-flex row row-cols-2 row-cols-md-4 row-cols-lg-5 mx-0 mb-4 g-4">

{/* ไหล่ */}

{/*C6 ท่าหมุนไหล่ stretching_6*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample6" aria-controls="offcanvasExample6">
                    <img class="card-img-top" src={stretch6} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample6">ท่าหมุนไหล่</p>
                </div>
            </div>
        </div>

{/*C7 ท่ายืดไหล่ดึงข้อศอก stretching_5*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample7" aria-controls="offcanvasExample7">
                    <img class="card-img-top" src={stretch5} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample7">ท่ายืดไหล่ดึงข้อศอก</p>
                </div>
            </div>
        </div>

{/*C9 ท่ายืดกล้ามเนื้อไหล่และต้นแขน stretching_10*/}    
        <div class="col">
            <div class="card stretch_card h-100">
            {/* เอาภาพใน card */}
                <button class="stretch_button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample9" aria-controls="offcanvasExample9">
                    <img class="card-img-top" src={stretch10} />
                </button>
            {/* */}
                <div class="card-body card_text">
                    <p class="card-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample9">ท่ายืดกล้ามเนื้อไหล่และต้นแขน</p>
                </div>
            </div>
        </div>


    </div>


{/* Inside each Offcanva*/}

{/* C1 ท่ามองซ้ายขวา stretching_1*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample1" 
        aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample1">ท่ามองซ้ายขวา</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" 
                onClick={this.handlePause1} ></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef1" type="video/mp4" src={stretching_1} ></video>
                {/*<ReactPlayer
                    // Disable download button
                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}

                    // Disable right click
                    onContextMenu={e => e.preventDefault()}

                    // Your props
                    url={stretching_4}
                    className="react-player"
                    controls
                    width="100%"
                    height="100%"
                />*/} 
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline"> 
                    1.	เริ่มต้นจากตามองตรง แล้วหมุนคอมองไป
                        ด้านขวามือช้าๆ แล้วหมุนกลับที่เดิม <br/>
                    2.	หมุนคอไปทางซ้ายมือ แล้วหมุนกลับที่เดิม 
                        ทำสลับซ้าย/ขวา <br/>
                    3.	ทำ 3-4รอบ
                    </p>
                </div>
            </div>
        </div>

{/* C2 ท่าเงยหน้าขึ้น/ลง stretching_2*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample2">ท่าเงยหน้าขึ้น/ลง</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause2}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef2" type="video/mp4" src={stretching_2} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline"> 
                    1.	เริ่มจากท่านั่งศีรษะตรง ค่อยๆ ก้มศีรษะลงไป
                        ข้างหน้า เก็บคาง เงยหน้าขึ้นอยู่ในท่าเริ่มต้น <br/>
                    2.	ใช้แขนข้างใดข้างหนึ่งหรือทั้งสองข้างวางที่หลัง
                        ต้นคอ ค่อยๆ เงยหน้าขึ้น ให้ศีรษะเอนไปทาง
                        ด้านหลัง แล้วก้มหน้าลงมาอยู่ในท่าเดิม
                    </p>
                </div>
            </div>
        </div>

{/* C3 ท่ายืดเหยียดคอทีละด้าน stretching_8*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample3" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample3">ท่ายืดเหยียดคอทีละด้าน</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause3}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef3" type="video/mp4" src={stretching_8} ></video>
                </div>
                    <p id="firstline"></p>
                    <p id="secondline"> 
                        1.	เริ่มจากหน้าตรง ตามองไปข้างหน้า แล้วค่อยๆ
                        เอียงคอไปทางขวามือแล้วกลับมาอยู่ท่าเดิม <br/>
                        2.	เอียงคอไปทางซ้ายมือ แล้วกลับมาอยู่ในท่าเดิม
                        อีกครั้ง (ระวังอย่าให้คอเหยียดตึงจนเกินไป)
                        ทำสลับซ้าย/ขวา <br/>
                        3.	ทำ 3-4 รอบ
                    </p>
            </div>
        </div>

{/* C4 ท่าบริหารต้นคอ stretching_9*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample4" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample4">ท่าบริหารต้นคอ</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause4}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef4" type="video/mp4" src={stretching_9} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline2"> 
                        เริ่มจากนำมือข้างซ้ายอ้อมไปจับศีรษะด้านขวา
                        ดึงมาทางด้านซ้ายจนรู้สึกตึง นับ 1-10 สลับใช้มือข้างขวาอ้อม
                        จับศีรษะด้านซ้ายทำเช่นเดียวกัน นับ 1-10 จากนั้นประสาน
                        มือบริเวณท้ายทอย ดันไปด้านหน้าจนรู้สึกตึง นับ 1-10
                    </p>
                </div>
            </div>
        </div>

{/* C5 ท่ายกไหล่กล้ามเนื้อ stretching_4*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample5" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample5">ท่ายกไหล่กล้ามเนื้อ</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause5}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                    <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef5" type="video/mp4" src={stretching_4} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline2"> 
                        นั่งหลังตรง จากนั้นยกไหล่ขึ้นให้สูงขึ้นทั้ง 2 ข้างค้างไว้ประมาณ 3-5 วินาทีทำ 3 ครั้ง
                        ท่านี้จะช่วยในเรื่องหลังส่วนบน ลำคอ และหัวไหล่
                    </p>
                </div>
            </div>
        </div>

{/* C6 ท่าหมุนไหล่ stretching_6*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample6" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample6">ท่าหมุนไหล่</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause6}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef6" type="video/mp4" src={stretching_6} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline"> 
                        1.	ให้พับไหล ่ทั้งสองข้างไปด้านหลังแล้วยกขึ้น
                        ก่อนที่จะหมุนไหล่เป็นวงกลมไปข้างหน้า ทำซ้ำ
                        แบบเดิม 8-10 ครั้ง <br/>
                        2.	เปลี่ยนเป็นพับไหล ่ไปด้านหน้า ยกไหล ่ขึ้น
                        ก่อนที่จะหมุนเป็นวงกลมไปด้านหลัง ทำซ้ำ
                        แบบเดิม 8-10 ครั้ง
                    </p>
                </div>
            </div>
        </div>

{/* C7 ท่ายืดไหล่ดึงข้อศอก stretching_5*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample7" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample7">ท่ายืดไหล่ดึงข้อศอก</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause7}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef7" type="video/mp4" src={stretching_5} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline"> 
                        1.	วางมือขวาลงบนไหล่ซ้าย ขณะที่ศอกขวายกขึ้นขนานกับพื้น
                        2.	ใช้มือซ้ายดึงศอกขวาเข้าหาตัวจากนั้นกลับไปท่าเริ่มต้น
                        3.	เปลี่ยนข้างทำสลับซ้าย/ขวา
                    </p>
                </div>
            </div>
        </div>

{/* C8 ท่าเอามือไขว้หลัง stretching_7*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample8" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample8">ท่าเอามือไขว้หลัง</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause8}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef8" type="video/mp4" src={stretching_7} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline2"> 
                        เอามือไขว้ด้านหลังจากนั้นใช้มืออีกข้างดึงข้อมือ และเอียงคอไปด้านที่ถูกดึง
                        ทำข้างละ 10-12 วินาทีช่วยยืดหลังส่วนล่างและลำคอ
                    </p>
                </div>
            </div>
        </div>

{/* C9 ท่ายืดกล้ามเนื้อไหล่และต้นแขน stretching_10*/}  
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample9" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample9">ท่ายืดกล้ามเนื้อไหล่และต้นแขน</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause9}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef9" type="video/mp4" src={stretching_10} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline2"> 
                        ยืดกล้ามเนื้อไหล่และต้นแขน โดยการประสานมือ จากนั้นยืดแขนและหันฝ่ามือออก
                        พยายามยืดแขนให้สุดให้เหมือนมีคนมาดึงมือเราไว้และนั่งหลังตรง ทำค้างไว้ 10-15 วินาที
                    </p>
                </div>
            </div>
            </div>

{/* C10 ท่าบริหารกล้ามเนื้อไหล่ stretching_3*/} 
        <div class="offcanvas offcanvas-start offcanvatext" data-bs-scroll="true" tabindex="-1" id="offcanvasExample10" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title offcanvatext" id="offcanvasExample10">ท่าบริหารกล้ามเนื้อไหล่</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                onClick={this.handlePause10}></button>
            </div>
            <div class="offcanvas-body offcanvatext_body">
            {/*Stretching Video without download button*/}
                <div class="embed-responsive embed-responsive-16by9">
                <video controls controlsList="nodownload" onContextMenu={e => e.preventDefault()}
                    ref="vidRef10" type="video/mp4" src={stretching_3} ></video>
                </div>
                <div class="stretch_info">
                    <p id="firstline"></p>
                    <p id="secondline2"> 
                        ยกไหล่ขึ้นไปจนสุด แล้วเกร็งค้างไว้
                        นับ 1-10 จากนั้นกดไหล่ลงไปให้สุด
                        แล้วเกร็งค้างไว้นับ 1-10 ท่านี้สำหรับ
                        ผู้ที่มีปัญหาเรื่องของการปวดไหล ่
                        เป็นประจำ
                    </p>
                </div>
            </div>
            </div>            

        <p id="Nxtbutton2" class="mt-5">
            <Button class="btn" id="btn-login" type="submit"onClick={this.getErgo}> <b> go to Ergonomics setting </b> </Button>
        </p>




            </div>
        )
    }

} 
