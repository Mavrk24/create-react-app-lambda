import { Form, Button, Container, Col, Row, Modal, FormControl, InputGroup, FormSelect } from 'react-bootstrap';
import {React, useState} from 'react';
import { Component } from 'react';
import './entry.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints'

export default class Entry extends Component{
  sendform = (e) => {
    axios
    .post("/subentry", {
      age: document.getElementById("age").value,
      sex: document.getElementById("sex").value,
      job: document.getElementById("job").value,
      faculty: document.getElementById("faculty").value,
      year: document.getElementById("year").value,
      username: JSON.parse(localStorage.getItem('token')).token,
})
.then(function (response) {
   console.log(response);
});
};

  handleChange = e => {
    this.form.validateFields(e.target);
  }

  contactSubmit = e => {
    e.preventDefault();
    this.sendform();
    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      this.props.history.push('/ndi');
      console.log('form is valid: submit');
    }
  }

  myFunction() {
    var x = document.getElementById("age").value;
    document.getElementById("demo").innerHTML = x;
  }

  render() {
    return(
      <div> 
        <h1 class="mx-5 pb-3" id="demographic-data"> Demographic Data <br/> 
        <p class="mt-2" id="survey"> ข้อมูลทั่วไป </p> </h1>
        

<FormWithConstraints
        ref={form => this.form = form}
        onSubmit={this.contactSubmit}
        noValidate className="data-form px-5" onSubmit="this.submit"> 
          <Row className="">
          <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label >อายุ*</Form.Label>
                <input name="age"id="age" type="number" size="30" placeholder="อายุ"
                 required onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="age">
            <FieldFeedback  id="feedback" when="*" class="mb-3"/>
          </FieldFeedbacks>    
          </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>เพศกำเนิด*</Form.Label>
                 <Form.Control name="sex" as="select" defaultValue=" " id="sex" required onChange={this.handleChange}>
                    <option> </option>
                    <option>หญิง</option>
                    <option>ชาย</option>
                  </Form.Control>
                  <FieldFeedbacks for="sex">
            <FieldFeedback id="feedback" when="*" class="mt-3 mb-3"/>
          </FieldFeedbacks> 
              </Form.Group>
          </Row>

          <Form.Label>อาชีพ* <br/>(ถ้ากำลังศึกษาอยู่ กรอก "นักเรียน" หรือ "นิสิต นักศึกษา")</Form.Label>
                <input name="job" type="text" id="job" size="30" placeholder="Occupation"
                 onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="job">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>
              
          <Form.Label>คณะที่กำลังศึกษา (ถ้ากำลังศึกษาอยู่ระดับมหาวิทยาลัย)</Form.Label>
                <input name="faculty" type="text" id="faculty" size="30" placeholder="Faculty"
                 onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="faculty">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>   

              
          <Form.Label>ชั้นปี (ถ้ากำลังศึกษาอยู่ระดับมหาวิทยาลัย)</Form.Label>
                <input name="year" type="number" id="year" size="30" placeholder="Study year"
                 onChange={this.handleChange}
                 className="form-control mb-3" />
          <FieldFeedbacks for="year">
            <FieldFeedback when="*" class="mb-3"/>
          </FieldFeedbacks>   

            
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Text className="text-muted">
                  เราจะไม่เปิดเผยข้อมูลของคุณให้ผู้อื่นที่ไม่เกี่ยวข้องและจะใช้เพื่อการส่งแบบสอบถามการใช้งานเพิ่มเติมเท่านั้น
                </Form.Text>
              </Form.Group>

          <p id="Nxtbutton">
            <button class="btn" id="btn-login" type="submit" onClick={this.contactSubmit}><b>Next</b></button>
          </p>
          </ FormWithConstraints>
      </div>
    
    )
  }
}