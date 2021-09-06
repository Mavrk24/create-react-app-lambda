import React, {useState} from 'react';
import { Component } from 'react';
import LgIFMSA from './LgIFMSA.png';
import LgThaihealth from './LgThaihealth.png';
import Lg20yrs from './Lg20yrs.png';
import LgeuHabit from './LgeuHabit.png';
import LgFamMed from './LgFamMed.png';
import './information.css';
import Navbar from './navbar';

export default class Information extends Component{



    render() {
        return(
            <div>       
                <Navbar />


{/* Information */}

                <p id="supported_by">Supported By</p>

                <div class="d-flex flex-column support">
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgIFMSA} width="100" height="100"/ >
                        </svg>
                    </div>
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgThaihealth} width="100" height="100"/ >
                        </svg>
                    </div>
                    <div id="img_center1">
                        <svg width="150" height="150">
                            <image href={Lg20yrs} width="150" height="150"/ >
                        </svg>
                    </div>
{/*                
                    <div id="img_center">
                        <svg width="100" height="100">
                            <image href={LgFamMed} width="100" height="100"/ >
                        </svg>
                    </div>
*/}                
{/*                        
                        <img src={LgIFMSA} id="imgprofile1" alt="IFMSA" />
                           
                        <img src={LgThaihealth} id="imgprofile2" alt="Thaihealth" />
                
                        <img src={Lg20yrs} id="imgprofile2" alt="20yrs" />

                        <img src={LgeuHabit} id="imgprofile1" alt="IFMSA" />
*/}
                </div> 

            </div>
        )

    }

}