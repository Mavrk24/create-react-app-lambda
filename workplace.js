import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import rosa11 from './rosa11.png';
import rosa12 from './rosa12.png';
import rosa13 from './rosa13.png';
import headup from './head up.jpg';
import headstraight from './head straight.jpg';
import headdown from './head down.jpg';
import './workplace.css';

export default class Workplace extends Component{
    constructor(props) {
        super(props);
        this.state = {
        arr: [],
        memory: '',
        }
      }
      send=(ele)=>{
        if (ele.target.name!=this.state.memory){
            this.setState({
                arr: this.state.arr.concat(parseInt(ele.target.id))
              });
            }
        else{
        var array = [...this.state.arr]; 
        var index = array.length-1
        if (index !== -1) {
         array.splice(index, 1);
         this.setState({arr: array.concat(parseInt(ele.target.id))});
        }
        }  
            this.setState({
              memory: ele.target.name
              });
        if (ele.target.name == 'btn'){
                console.log(
                this.state.arr +
                ' duration1: '+ document.getElementById('duration').value
                +' duration2: ' + document.getElementById('duration2').value);
              }
        }
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data"> 
                    Workplace condition <br/>
                    <p class="mt-2" id="survey"> แบบประเมินสภาพแวดล้อมในการนั่งทำงาน </p>
                </h1> 
                
                <p class="mx-5 p-3" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์และท่าทางการนั่งทำงาน/เรียนกับคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์โดยประเมินจาก <br/>
                    กรุณาทำเครื่องหมายลงในช่อง "ทุกช่องที่ตรงกับคุณ"
                <br/> <b>กรุณาทำเรียงข้อ</b>
                </p>

                <Form className="px-5 mb-3 mx-3" id="screening-form">
                    
                <p className="mb-2 pt-2" id="qtitle"> โต๊ะ เก้าอี้ </p>   

                
{/*Q1 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label className="mb-3" id="question">1. ข้อใดเป็นจริงเกี่ยวกัยโต๊ะของท่าน </Form.Label>
                            <div className="mb-3">
        {/* = 1 point */}       <Form.Check     
                                    type="radio"
                                    id={1}
                                    name="q11"
                                    label="ท่านต้องก้มหลังเมื่อต้องการทำงานที่โต๊ะ"
                                    onClick={this.send}
                                    class="choice"
                                />
                            </div>
                            <div className="mb-3">
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={2}
                                    name="q11"
                                    onClick={this.send}
                                    label="ท่านรู้สึกสบายเมื่อทำงานที่โต๊ะ"
                                />
                            </div>
                            <div className="mb-3">
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={3}
                                    name="q11"
                                    onClick={this.send}
                                    label="ท่านรู้สึกว่าไหล่ของท่านยกเมื่อทำงานที่โต๊ะ"
                                />
                            </div>
                    </Form.Group>

                
{/*Q1 ข้อ 2*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label className="mb-3" id="question">2. ข้อใดสอดคล้องกับความจริงมากที่สุด </Form.Label>
                            <div className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id= {1}
                                    name="q12"
                                    onClick={this.send}
                                    label="ท่านไม่มีที่พักแขน"
                                />
                            </div>
                            <div className="mb-3">
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={2}
                                    name="q12"
                                    label="ท่านมีที่พักแขนที่สามารถวางแขนได้สะดวก"
                                    onClick={this.send}
                                />
                            </div>
                            <div>
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={3}
                                    name="q12"
                                    label="ท่านมีที่พักแขน แต่ไม่สะดวกจะวางแขน"
                                    onClick={this.send}
                                />
                            </div>
                    </Form.Group>

                    <p className="mb-2 mt-2 pt-2" id="qtitle"> หน้าจอคอมพิวเตอร์หรือแท็บเลต </p>   

{/*Q2 ข้อ 1*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">1. เมื่อท่านมองหน้าจอท่านพบว่า </Form.Label>
                            <div className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id= {1}
                                    name="q21"
                                    label="ท่านต้องเงยหน้าเพื่อมองหน้าจอ"
                                    onClick={this.send}
                                />
                            {/* image */}
                                <img src={headup} id="photo"  alt="head up" / >
                            </div>
                            <div className="mb-3">
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={2}
                                    name="q21"
                                    label="ท่านสามารถมองหน้าจอด้วยสายตาในแนวระดับหรือเหลือบลงเล็กน้อย"
                                    onClick={this.send}
                                />
                                <img src={headstraight} id="photo"  alt="head straight" / >
                            </div>
                            <div className="mb-3">
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={3}
                                    name="q21"
                                    label="ท่านต้องก้มลงเพื่อมองหน้าจอ"
                                    onClick={this.send}
                                />
                                <img src={headdown} id="photo"  alt="head down" / >
                             {/*       
                                <svg width="150" height="150" id="photo">
                                    <image href={headdown} id="photo" height="150" width="150" alt="head straight" / >
                                </svg>
                             */}
                            </div>
                    </Form.Group>

{/*Q2 ข้อ 2*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question">2. ระยะห่างระหว่างท่านกับหน้าจอมีระยะประมาณ </Form.Label>
                            <div className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type="radio"
                                    id={1}
                                    name="q22"
                                    label="ต่ำกว่า 45 เซนติเมตร"
                                    onClick={this.send}
                                />
                            </div>
                            <div className="mb-3">
        {/* = 2 point */}       <Form.Check 
                                    type="radio"
                                    id={2}
                                    name="q22"
                                    label="ประมาณ 45-70 เซนติเมตร"
                                    onClick={this.send}
                                />
                            </div>
                            <div className="mb-3">
        {/* = 3 point */}       <Form.Check
                                    type="radio"
                                    id={3}
                                    name="q22"
                                    label="มากกว่า 70 เซนติเมตร"
                                    onClick={this.send}
                                />
                            </div>
                    </Form.Group>


{/*Q2 ข้อ 3*/}       <Form.Label id="question" class="mb-3 px-4"> 3. ขณะมองหน้าจอ ศีรษะของท่านตรงและอยู่กลางไหล่ทั้งสองข้าง (ไม่ต้องเอียงคอ)  </Form.Label> <br/>
                        <div>
                            <input name="q23" variant="success" id={"0"} type="button" class="btn yesbutton" value="ใช่"  onClick={this.send} / > {' '}
                            <input name="q23" variant="danger" id={1} type="button" class="btn nobutton" value="ไม่ใช่"  onClick={this.send} / > 
                        </div>

                    <p className="mb-2 mt-3" id="qtitle"> การเขียนหนังสือ </p>   

{/*Q3 ข้อ 1*/}       <Form.Label id="question" class="mb-3 px-4"> 1. แขนสองข้างขนานกับพื้นหรือเอียงน้อย และข้อศอกอยู่ข้างลำตัว   </Form.Label> <br/>
                        <div>
                            <input name="q31" variant="success" id="0" type="button" class="btn yesbutton"  onClick={this.send} value="ใช่" / > {' '}
                            <input name="q31" variant="danger" id={1} type="button" class="btn nobutton"  onClick={this.send} value="ไม่ใช่" / > 
                        </div>


{/*Q3 ข้อ 2*/}       <Form.Label id="question" class="mb-3 mt-3 px-4"> 2. เหยียดแขนขณะเขียนหนังสือ  </Form.Label> <br/>
                        <div>
                            <input name="q32" variant="success" id="0" type="button" class="btn yesbutton"  onClick={this.send} value="ใช่" / > {' '}
                            <input name="q32" variant="danger" id={1} type="button" class="btn nobutton"  onClick={this.send} value="ไม่ใช่" / > 
                        </div>
                
{/*Q3 ข้อ 3*/}       <Form.Label id="question" class="mb-3 mt-3 px-4"> 3. ข้อศอกทำมุมฉากหรือ 90 องศากัน </Form.Label> <br/>
                        <div>
                            <input name="q33" variant="success" id="0" type="button" class="btn yesbutton" value="ใช่" onClick={this.send} / > {' '}
                            <input name="q33" variant="danger" id={1} type="button" class="btn nobutton" value="ไม่ใช่"  onClick={this.send}/ > 
                        </div>

                    <p className="mb-2 mt-2 pt-2" id="qtitle"> ระยะเวลาในการใช้งานอุปกรณ์อิเล็กทรอนิกส์ </p>   

{/*Q4 ข้อ 1*/}       <Form.Group className="mb-3 mt-3 px-4">
                        <Form.Label id="question">1. ท่านนั่งเป็นเวลากี่ชั่วโมงต่อวัน </Form.Label>
                        <Form.Text  id="question2"> (กรุณาตอบเป็น หน่วย ชั่วโมง และ นาที เช่น 1 ชั้วโมง 30 นาที ให้ตอบเป็น 1:30) </Form.Text>
                            <input name="duration"id="duration" type="text" size="30" placeholder="ชั่วโมง:นาที" required 
                            className="form-control mb-3" />
                    </Form.Group>

{/*Q4 ข้อ 1*/}       <Form.Group className="mb-3 mt-3 px-4">
                        <Form.Label id="question">2. ท่านนั่งติดต่อกันเป็นเวลานานเท่าใดต่อหนึ่งครั้ง </Form.Label>
                        <Form.Text  id="question2"> (กรุณาตอบเป็น หน่วย ชั่วโมง และ นาที เช่น 1 ชั้วโมง 30 นาที ให้ตอบเป็น 1:30) </Form.Text>
                            <input name="duration"id="duration2" type="text" size="30" placeholder="ชั่วโมง:นาที" required 
                            className="form-control mb-3" />
                    </Form.Group>

                </Form>
                <Button class="btn" name="btn" id="0" type="submit" onClick={this.send}>Finish</Button>
                <p id="Nxtbutton2">
                    <Button class="btn" id="btn-login" type="submit" href="/mainpage"><b>mainpage</b></Button>
                </p>
            </div>
        )
    }
}