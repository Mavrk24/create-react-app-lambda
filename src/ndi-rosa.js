import { Form, Button, Container, Col, Row, Modal, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './ndi-rosa.css';

export default class NDI extends Component{
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      memory: '',
      prev: 0,
      tempAns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //เก็บคำตอบแต่ละข้อ
    };
  }
  
    getTree = () => {
        this.props.history.push('/qtree');
        console.log('form is valid: submit');
    }

    calculate=(ele)=>{
      if (ele.target.name!=this.state.memory) {
        this.setState(previousState => ({
          score: parseInt(parseInt(previousState.score) + parseInt(ele.target.id))
        }));
        this.setState({
          prev: parseInt(ele.target.id)
        });
      } else {
        this.setState(previousState => ({
          score: parseInt(parseInt(previousState.score) - (this.state.prev) + parseInt(ele.target.id))
        }));
        this.setState({
            prev: parseInt(ele.target.id)
        });
      }
      
      var tempData = this.state.tempAns
      this.setState({
        memory: ele.target.name,
        tempAns: tempData
      });
      
      if (ele.target.name == 'btn'){
        tempData[10] = this.state.score
        console.log('NDI score: '+ this.state.score);
        fetch('https://euhabit-server.herokuapp.com/api/users/ndi', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': "https://euhabit.netlify.app",
                token: localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.tempAns)
        })

        this.getTree();
        } else {
            tempData[ele.target.name] = parseInt(ele.target.id)
      }
    }
    
    render() {
        return(
            <div> 
                <h1 class="mx-5 pb-3" id="demographic-data1"> Neck Disability Index (NDI) </h1>
                <p class="mx-5 p-3" id="instruction1"> 
                    แบบสอบถามนี้ทำขึ้นเพื่อรับข้อมูลว่าอาการปวดคอมีผลต่อการใช้ชีวิตประจำวันของท่านอย่างไร
                    กรุณาทำเครื่องหมายลงในช่องเพียงหนึ่งช่อง
                    ในแต่ละข้อซึ่งอธิบายอาการของท่านในวันนี้ได้ดีที่สุด 
                </p>

{/* คำถาม NDI */}      

                <Form className="px-5" id="screening-form1">
{/*Q1*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1"> 1. ความเจ็บปวด </Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi1"
                                    label="ยังไม่มีความเจ็บปวดในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi1"
                                    label="ปวดน้อยมากในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi1"
                                    label="ปวดปานกลางในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi1"
                                    label="ปวดค่อนข้างรุนแรงในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi1"
                                    label="ปวดรุนแรงมากในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi1"
                                    label="ปวดร้ายแรงที่สุดเท่าที่จะจินตนาการได้ในขณะนี้"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>
        
{/*Q2*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">2. การดูแลตนเอง</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi2"
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติโดยไม่มีความเจ็บปวดเพิ่มขึ้น"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi2"
                                    label="ฉันสามารถดูแลตนเองได้ตามปกติแต่อาจมีความเจ็บปวดเพิ่มขึ้น"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi2"
                                    label="ขณะดูแลตนเองจะมีอาการเจ็บปวดทำให้ต้องทำช้า ๆ และระมัดระวัง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi2"
                                    label="ฉันต้องการความช่วยเหลือบ้างแต่ยังสามารถดูแลตนเองได้เป็นส่วนใหญ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi2"
                                    label="ฉันต้องการความช่วยเหลือทุกวันในการดูแลตนเองเกือบทุกด้าน"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi2"
                                    label="ฉันไม่สามารถแต่งตัวเองได้,ฉันอาบน้ำตนเองด้วยความยากลำบากและต้องอยู่บนเตียง"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

               
{/*Q3*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">3. การยกของ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi3"
                                    label="ฉันสามารถยกของหนักได้โดยไม่มีการเจ็บปวดเพิ่มเติม"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi3"
                                    label="ฉันสามารถยกของหนักได้แต่มีการเจ็บปวดเพิ่มเติม"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi3"
                                    label="อาการปวดทำให้ฉันไม่สามารถยกของหนักสูงขึ้นจากพื้น แต่ฉันสามารถยกได้ถ้าของอยู่ในตำแหน่งที่สามารถ
                                    ทำให้ยกได้ง่ายมากขึ้น เช่น วางอยู่บนโต๊ะ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi3"
                                    label="อาการปวดทำให้ฉันไม่สามารถยกของน้ำหนักเบาถึงปานกลางสูงขึ้นจากพื้น แต่ฉันสามารถยกได้ถ้าของอยู่ใน
                                    ตำแหนงที่ง่ายขึ้น เช่น ถ้าของอยู่บนโต๊ะ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi3"
                                    label="ฉันสามารถยกของที่เบามาก ๆ ได้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi3"
                                    label="ฉันไม่สามารถยกหรือถืออะไรได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q4*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">4. การอ่านหนังสือ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยไม่มีอาการปวดคอ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยมีอาการปวดคอเล็กน้อย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi4"
                                    label="ฉันสามารถอ่านหนังสือได้เท่าที่ต้องการโดยมีอาการปวดคอปานกลาง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi4"
                                    label="ฉันไม่สามารถอ่านหนังสือได้เท่าที่ต้องการเพราะปวดต้นคอปานกลาง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi4"
                                    label="ฉันอ่านหนังสือได้อย่างยากลำบากเพราะอาการปวดคอรุนแรง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi4"
                                    label=" ฉันไม่สามารถอ่านหนังสือได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q5*/}            <Form.Group className="mb-3 px-4">
                    <Form.Label id="question1">5. อาการปวดศีรษะ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi5"
                                    label="ฉันไม่มีอาการปวดศีรษะเลย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะเล็กน้อยไม่บ่อย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะปานกลางไม่บ่อย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะปานกลางบ่อย ๆ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi5"
                                    label="ฉันมีอาการปวดศีรษะรุนแรงบ่อย ๆ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi5"
                                    label=" ฉันมีอาการปวดศีรษะเกือบตลอดเวลา"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q6*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">6. การมีสมาธิ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi6"
                                    label="ฉันสามารถมีสมาธิเต็มที่เมื่อฉันต้องการโดยไม่ได้ยากลำบากนัก"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi6"
                                    label="ฉันสามารถมีสมาธิเต็มที่เมื่อฉันต้องการโดยยากลำบากเล็กน้อย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากกลาง ๆ ที่จะมีสมาธิเมื่อฉันต้องการ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากมากที่จะมีสมาธิเมื่อฉันต้องการ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi6"
                                    label="ฉันมีความยากลำบากมาก ๆ ที่จะมีสมาธิเมื่อฉันต้องการ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi6"
                                    label="ฉันไม่สามารถมีสมาธิได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q7*/}            <Form.Group className="mb-3 px-4">
                    <Form.Label id="question1">7. การทำงาน</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi7"
                                    label="ฉันสามารถทำงานได้มากเท่าที่ต้องการ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi7"
                                    label="ฉันสามารถทำงานปกติทั่วไปได้แต่ไม่มากกว่านี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi7"
                                    label="ฉันทำงานปกติทั่วไปส่วนใหญ่ได้แต่ไม่มากกว่านี้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi7"
                                    label="ฉันไม่สามารถทำงานปกติทั่วไปได้"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi7"
                                    label=" ฉันทำงานได้ด้วยความยากลำบาก"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi7"
                                    label=" ฉันไม่สามารถทำงานได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q8*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">8. การขับรถ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi8"
                                    label="ฉันขับรถได้โดยไม่มีอาการปวดคอ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi8"
                                    label="ฉันขับรถได้ไกลเท่าที่ฉันต้องการโดยมีอาการปวดต้นคอเล็กน้อย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi8"
                                    label="ฉันขับรถได้ไกลเท่าที่ต้องการโดยมีอาการปวดต้นคอปานกลาง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi8"
                                    label="ฉันไม่สามารถขับรถได้ไกลเท่าที่ต้องการเพราะอาการปวดคอปานกลาง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi8"
                                    label="ฉันขับรถได้ด้วยความยากลำบากเนื่องจากปวดต้นคออย่างรุนแรง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi8"
                                    label="ฉันไม่สามารถขับรถได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q9*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">9. การนอนหลับ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi9"
                                    label="ฉันไม่มีปัญหาเรื่องการนอนหลับเลย"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนน้อยมาก (นอนไม่หลับน้อยกว่า 1 ชั่วโมง)"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนเล็กน้อย (นอนไม่หลับ 1-2 ชั่วโมง)"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนปานกลาง (นอนไม่หลับ 2-3 ชั่วโมง)"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนรุนแรง (นอนไม่หลับ 3-5 ชั่วโมง)"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi9"
                                    label="การนอนหลับของฉันถูกรบกวนอย่างสมบูรณ์แบบ (นอนไม่หลับ 5-7 ชั่วโมง)"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>

{/*Q10*/}            <Form.Group className="mb-3 px-4">
                        <Form.Label id="question1">10. กิจกรรมนันทนาการ</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <div className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id='0'
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้ทุกอย่างโดยไม่มีอาการปวดคอ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={1}
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้ทุกอย่างโดยมีปวดคอบ้าง"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={2}
                                    name="ndi10"
                                    onClick={this.calculate}
                                    label=" ฉันสามารถเข้าร่วมกิจกรรมนันทนาการได้เป็นส่วนใหญ่แต่ไม่ทั้งหมดเนื่องจากอาการปวดคอ"
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={3}
                                    name="ndi10"
                                    label="ฉันสามารถเข้าร่วมกิจกรรมนันทนาการของฉันได้บ้างเพราะปวดคอ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={4}
                                    name="ndi10"
                                    label="ฉันเข้าร่วมกิจกรรมนันทนาการได้อย่างยากลำบากเพราะปวดคอ"
                                    onClick={this.calculate}
                                />
                                </div>
                                <div className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={5}
                                    name="ndi10"
                                    label="ฉันไม่สามารถเข้าร่วมกิจกรรมนันทนาการได้เลย"
                                    onClick={this.calculate}
                                />
                                </div>
                            </div>
                        ))}
                    </Form.Group>                
                </Form>
                    <p id="Nxtbutton1">
                    <Button class="btn" id={0} type="submit" onClick={this.calculate} ><b>Next</b></Button>
                    </p>

            </div>
        )
    }
}
