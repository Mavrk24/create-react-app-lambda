import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import React, {useState} from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './intervention.css';
import ReactDOM from 'react-dom';
import LgeuHabit from './LgeuHabit.png';

import ergonomics from './ergonomics picture.png';
import Navbar from './navbar';


export default class Intervention extends Component{

getStretching = () => {
        this.props.history.push('/recommendation');
}
    render() {
        return(
        <div> 
            <Navbar />  

{/* Ergonomics setting */}
            
            <div class="row">
                <div class="col"> <p id="profile1"> ท่านั่งตามหลักการยศาสตร์ </p> </div>
                <div class="col"> <p id="profile2"> ( Ergonomics Setting ) </p> </div>
            </div>

            <div class="row d-flex">
                <div class="flex-column">
                <p id="clickbutton1"> Click on the button ( <a class="btn btn-primary btn_size"> </a> ) to see the information </p>
                </div>
            </div>

{/* ทำปุ่มคลิ๊กบนรูป แล้วใส่ข้อมูลใน offcanva แล้วก็เสร็จ */}
            <div class="container">
                {/*ลองใช้ SVG ดู แทน img*/}
                <img src={ergonomics} alt="ergonomics setting" / > 
                {/* แบบ svg ใช้ได้เหมือนกัน แต่ไม่รู้ว่าภาพจริงใช้อันไหนจะชัดกว่ากัน */}    
                {/*  <svg class="ergopic" id="photo">
                        <image class="ergopic" href={ergo} / >
                    </svg>
                */}
                  {/*ไม่ใช่แล้ว  <button class="btn">Button</button> */}
{/*button 1*/}  <a class="btn-primary btn_size" id="button1" data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample">  </a>

{/*button 2*/}  <a class="btn-primary btn_size" id="button2" data-bs-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample">  </a>

{/*button 3*/}  <a class="btn-primary btn_size" id="button3" data-bs-toggle="offcanvas" href="#offcanvasExample3" role="button" aria-controls="offcanvasExample">  </a>            
            
{/*button 4*/}  <a class="btn-primary btn_size" id="button4" data-bs-toggle="offcanvas" href="#offcanvasExample4" role="button" aria-controls="offcanvasExample">  </a>            

{/*button 5*/}  <a class="btn-primary btn_size" id="button5" data-bs-toggle="offcanvas" href="#offcanvasExample5" role="button" aria-controls="offcanvasExample">  </a>            

{/*button 6*/}  <a class="btn-primary btn_size" id="button6" data-bs-toggle="offcanvas" href="#offcanvasExample6" role="button" aria-controls="offcanvasExample">  </a>            

{/*button 7*/}  <a class="btn-primary btn_size" id="button7" data-bs-toggle="offcanvas" href="#offcanvasExample7" role="button" aria-controls="offcanvasExample">  </a>            

            </div>

{/*                
            <button class="btn btn-primary btn_size" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button>
*/}
{/* Instruction in OffCanva*/}

{/*Canva1 ศีรษะ*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel1">ศีรษะ</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	ศีรษะอยู่กลางไหล่ทั้งสองข้าง <br/> 
                        -	สายตามองตรงในแนวระดับหรือมองต่ำเล็กน้อย <br/>
                        -	จอคอมพิวเตอร์ห่างจากศีรษะอย่างน้อย 1 ช่วงแขน (40-75 ซม.) <br/>
                    </div>
                
                {/* <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                */}
                
                </div>
            </div>

{/*Canva2 แขน ไหล่ ศอก*/}   
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel2">แขน ไหล่ ศอก</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	ไหล่ทั้งสองข้างอยู่ในท่าที่สบาย <br/>
                        -	มีที่พักแขน <br/>
                        -	ระดับของโต๊ะทำงานไม่ต่ำหรือสูงเกินไป คือไม่สูงเกินจนไหล่ยก และไม่ต่ำเกินจนต้องก้ม <br/>
                            o	ที่เหมาะสมประมาณ 65-70 ซม. <br/>
                        -	ปลายแขนขนานกับพื้น<br/>
                        -	ศอกควรทำมุม 90 องศา <br/>
                        -	ศอกอยู่ชิดลำตัว ไม่กางหรือหุบมากเกินไป <br/>
                        -	ข้อมืออยู่แนวเดียวกับแขน <br/>
                        -	แขนไม่ยกหรือเหยียดขณะทำงาน 
                    </div>              
                </div>
            </div>

{/*Canva3 ขา เท้า*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample3" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel3">ขา เท้า</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	เข่าทำมุม 90 องศา <br/>
                        -	ต้นขาขนานกับพื้น <br/>
                        -	เก้าอี้มีความสูงที่พอดีกับผู้นั่ง (เท้าแตะถึงพื้น) <br/>
                        -	ข้อเท้าตรง <br/>

                    </div>
                </div>
            </div>

{/*Canva4 ข้อมือ มือ*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample4" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel4">ข้อมือ มือ</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	ข้อมือไม่งอหรือเกร็งจนมากเกินไป <br/>
                        -	ระดับโต๊ะไม่สูงเกินไป <br/>
                        -	วางสิ่งของที่ใช้บ่อยไว้ใกล้ตัวเพื่อความสะดวกในการหยิบ
                    </div>
                </div>
            </div>

{/*Canva5 หลัง*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample5" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel5">หลัง</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	นั่งตัวตรงไม่ก้มหรือบิดลำตัว <br/>
                        -	ลำตัสอยู่ในแนวตรงหรือเอนไปด้านหน้าเล็กน้อย <br/>
                        -	มีที่พนักพิงแนบชิดกับหลัง <br/>
                        -	สะโพกทำมุม 90 องศา 
                    </div>
                </div>
            </div>

{/*Canva6 ตา*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample6" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel6"> ตา </h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	มีแสงสว่างเพียงพอและไม่มากเกินไป <br/>
                        -	ไม่มีแสงสะท้อนจากจอคอมพิวเตอร์ <br/>
                        -	เพื่อป้องกันภาวะตาแห้ง <br/>
                        -	ให้กระพริบตาบ่อยๆหรือพักหลับตาประมาณ 3-5 วินาที <br/>
                        -	พักสายตาประมาณ 5-10 นาที ทุกๆ 1-2 ชั่วโมง <br/> 
                        -	กฎ 20-20-20  <br/>
                            o	ทำงาน 20 นาทีต่อเนื่อง <br/>
                            o	มองไกล 20 ฟุต <br/>
                            o	20วินาที <br/>
                    </div>
                </div>
            </div>

{/*Canva7 เวลา*/}    
            <div class="offcanvas offcanvas-start offcanvatext" tabindex="-1" id="offcanvasExample7" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title offcanvatext" id="offcanvasExampleLabel7">เวลา</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body offcanvatext offcanvatext_body">
                    <div>
                        -	นั่งทำงานวันละไม่เกิน 4 ชั่วโมงแบบไม่ต่อเนื่อง หรือ น้อยกว่า 1 ชั่วโมงแบบต่อเนื่องกัน <br/>
                        -	หยุดพักเป็นระยะ และหากิจกรรมที่มีการเคลื่อนไหวของร่างกาย <br/>
                    </div>
                </div>
            </div>

            <p id="Nxtbutton2" class="mt-4">
                <Button class="btn" id="btn-login" type="submit" onClick={this.getStretching}> <b>go to stretching </b> </Button>
            </p>

        </div>
        )
    }
}
