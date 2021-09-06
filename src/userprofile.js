import {React, useState} from 'react';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './userprofile.css';
import rosa11 from './rosa11.png';
import LgeuHabit from './LgeuHabit.png';
import Navbar from './navbar';


export default class Profile extends Component{

    handleClick = e => {
        
        localStorage.clear();
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }
    
    render() {
        return(
            <div>  
                <Navbar /> 
 
 {/* Profile */}
                
                <h1 id="profile">  Profile </h1> 

                <div class="d-flex flex-column content">
                    <div>
                    <img src={rosa11} id="imgprofile" alt="Profile picture" />
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex justify-content-center">
                            <p id="heading"> Username: </p>
                            <p>hi</p> {/* ข้อมูลที่จะดึง */}
                        </div>
                        <div class="d-flex justify-content-center">
                            <p id="heading"> E-mail: </p>
                            <p> abs@hotmail.com </p>   {/* ข้อมูลที่จะดึง */} 
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Demographic data </b> </p>   
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> Age: </p>
                                <p> 16 </p>    {/* ข้อมูลที่จะดึง */}v
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> Biological sex: </p>
                                <p> Male </p>    {/* ข้อมูลที่จะดึง */}
                            </div>  
                            <div class="d-flex">
                                <p id="heading"> Occupation: </p>
                                <p> Student </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> Faculty: </p>
                                <p> Medicine </p>    {/* ข้อมูลที่จะดึง */}
                            </div> 
                            <div class="d-flex">
                                <p id="heading"> Study year: </p>
                                <p> 2 </p>    {/* ข้อมูลที่จะดึง */}
                            </div>       
                        </div>
                        <div class="d-flex justify-content-center">
                            <p><b> Screening Results </b> </p>  
                        </div>
                        <div class="alignment">
                            <div class="d-flex">
                                <p id="heading"> Workplace condition: </p>
                                <p> 16 </p>    {/* ข้อมูลที่จะดึง */}
                            </div>      
                            <div class="d-flex">
                                <p id="heading"> Neck Disability Index (NDI): </p>
                                <p> 40 </p> {/* ข้อมูลที่จะดึง */}    
                            </div>       
                        </div>
                        
                    </div>
                </div>
                

            </div>
        )
    }
}