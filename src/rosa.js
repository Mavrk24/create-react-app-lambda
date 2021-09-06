import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import Image from 'react-bootstrap/Image';
import rosa11 from './rosa11.png';
import rosa12 from './rosa12.png';
import rosa13 from './rosa13.png';
import rosa14 from './rosa14.png';
import rosa31 from './rosa31.png';
import rosa32 from './rosa32.png';
import rosa33 from './rosa33.png';
import rosa34 from './rosa34.png';
import rosa35 from './rosa35.png';
import rosa41 from './rosa41.png';
import rosa42 from './rosa42.png';
import rosa43 from './rosa43.png';
import rosa44 from './rosa44.png';
import rosa45 from './rosa45.png';
import './rosa.css';
import Figure from 'react-bootstrap/Figure'

const Score = 0;

export default class ROSA extends Component{
    monitor_cl = (e) => {
        e.preventDefault();
        const m_score = document.getElementById('monitor_score').value;
        console.log(m_score)
    }
    render() {
        return(
            <div> 
                <h1 className="mx-5 pb-3" id="demographic-data"> 
                    rapid office strain assessment (ROSA) <br/>
                    <p class="mt-2" id="survey"> แบบประเมินความเสี่ยงทางการยศาสตร์ด้วยวิธีโรซ่า </p>
                </h1> 
                
                <p className="mx-5 p-3" id="instruction"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อวิเคราะห์สถานีงานและท่าทางการนั่งทำงานกับคอมพิวเตอร์โดยประเมินจาก <br/>
                    1. ระดับของจอคอมพิวเตอร์และลักษณะการใช้โทรศัพท์สำนักงาน <br/>
                    2. การใช้เมาส์และแป้นพิมพ์ <br/>
                    กรุณาทำเครื่องหมายลงในช่อง "ทุกช่องที่ตรงกับคุณ"
                </p>

{/*คำถาม ROSA*/}
                

{/* เพิ่มภาพประกอบในตัวเลือกด้วย */}

            
                <Form className="px-5 mb-3 mx-3" id="screening-form" onSubmit={this.monitor_cl}>

                <p className="mb-2 pt-2" id="qtitle"> การวิเคราะห์จอมอนิเตอร์และโทรศัพท์ </p>   

                
{/*Q1 ข้อ 8*/}       <Form.Group className="mb-3 px-4">
                         <Button type="submit">Sub </Button>
                        <Form.Label id="question"> 1. จอมอนิเตอร์ (Monitor) </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check                      
                                    type={type}
                                    id={'monitor_score'}
                                    value="1"
                                    label="จอห่างจากลำตัว 1 ช่วงความยาวแขน (40-75 ซม.) และจอสูงระดับดวงตา"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa11} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check 
                                    type={type}
                                    id={'monitor_score'}
                                    value="2"
                                    label="จอต่ำเกินไป (ต่ำกว่า 30 องศา)"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa12} height="75" width="75"/ >
                                </svg>
        {/* = 3 point */}       <Form.Check
                                    type={type}
                                    id={'monitor_score'}
                                    value="3"
                                    label="จอสูงเกินไป (แหงนคอ)"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa13} height="75" width="75"/ >
                                </svg>
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="หมุนคอมากกว่า 30 องศา"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa14} height="75" width="75"/ >
                                </svg>                              
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="มีแสงจ้าที่หน้าจอ"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="เอกสารไม่มีที่วาง"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="หน้าจอไกลเกินไป"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่องมากกว่า 1 ชม. หรือมากกว่า 4 ชม./วัน"
                                />
        {/* + 0 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่อง 30 นาที - 1 ชม. หรือมากกว่า 1-4 ชม./วัน"
                                />
        {/* - 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa1"
                                    label="ใช้งานต่อเนื่องน้อยกว่า 30 นาที หรือน้อยกว่า 1 ชม./วัน"
                                />
                            </div>
                        ))}
                    </Form.Group>

                <p className="mb-2 pt-2" id="qtitle"> การวิเคราะห์เม้าส์และแป้นพิมพ์ (Mouse and Keyboard) </p>    

{/*Q1 ข้อ 11*/}      <Form.Group className="mb-3 px-4">
                        <Form.Label id="question"> 3. เม้าส์ (Mouse)  </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="เม้าส์ขนานเป็นแนวเดียวกับไหล่"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa31} height="75" width="75"/ >
                                </svg>
        {/* = 2 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="การเอื้อมมือไปที่เม้าส์"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa32} height="75" width="75"/ >
                                </svg>
        {/* + 2 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="เม้าส์และเเป้นพิมพ์วางต่างระดับกัน"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa33} height="75" width="75"/ >
                                </svg>
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="การหยืบเม้าส์ด้วยปลายนิ้ว (pinch grip)"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa34} height="75" width="75"/ >
                                </svg>
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="ที่รองมือ (palmrest) อยู่ด้านหน้าเม้าส์"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa35} height="75" width="75"/ >
                                </svg>
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="ใช้งานต่อเนื่องมากกว่า 1 ชม. หรือมากกว่า 4 ชม./วัน"
                                />
        {/* = 0 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="ต่อเนื่อง 30 นาที - 1 ชม. หรือ 1-4 ชม./วัน"
                                />
        {/* - 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa3"
                                    label="ต่อเนื่องน้อยกว่า 30 นาที หรือน้อยกว่า 1 ชม./วัน"
                                />

                            </div>
                        ))}
                    </Form.Group>


{/*Q1 ข้อ 12*/}       <Form.Group className="mb-3 px-4">
                        <Form.Label id="question"> 4. แป้นพิมพ์ (Keyboard) </Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
        {/* = 1 point */}       <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ข้อมือตรง, ไหล่อยู่ในท่าสบาย"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa41} height="75" width="75"/ >
                                </svg> 
        {/* = 2 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ข้อมือกระดก/ แป้นพิมพ์เอียงขึ้น (ข้อมืองอ > 15 องศา)"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa42} height="75" width="75"/ >
                                </svg> 
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ข้อมือเอียงขณะพิมพ์"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa43} height="75" width="75"/ >
                                </svg> 
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="แป้นพิมพ์สูงเกินไป - ไหล่ยก"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa44} height="75" width="75"/ >
                                </svg>
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="เอื้อมหยิบสิ่งของเหนือศีรษะ"
                                />
                                <svg width="75" height="75" id="photo">
                                    <image href={rosa45} height="75" width="75"/ >
                                </svg> 
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="แท่นวางแป้นพิมพ์ไม่สามารถปรับได้"
                                />
        {/* + 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ใช้งานต่อเนื่องมากกว่า 1 ชม. หรือมากกว่า 4 ชม./วัน"
                                />
        {/* = 0 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ต่อเนื่อง 30 นาที - 1 ชม. หรือ 1-4 ชม./วัน"
                                />
        {/* - 1 point */}       <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    name="rosa4"
                                    label="ต่อเนื่องน้อยกว่า 30 นาที หรือน้อยกว่า 1 ชม./วัน"
                                />

                            </div>
                        ))}
                    </Form.Group>
                </Form>

            </div>
        )
    }
}            