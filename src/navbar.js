import React, {useState} from 'react';
import { Component } from 'react';
import LgeuHabit from './LgeuHabit.png';
import LgeuHabit_white from './LgeuHabit-white.png';
import './mainpage.css';
import { withRouter,useHistory } from 'react-router-dom';

class Navbar extends Component{
    constructor(props) {
    super(props);
  };
    

    handleClick = e => {
        
       localStorage.removeItem('token');
        e.preventDefault();
        this.props.history.push('/');
        window.location.reload();
      
    }
     getHome = () => {
        this.props.history.push('/mainpage'); 
    } 
    getProfile = () => {
        this.props.history.push('/userprofile'); 
    } 
    getResult = () => {
        this.props.history.push('/recommendation'); 
    } 
    getErgo = () => {
        this.props.history.push('/intervention'); 
    } 
    getStretching = () => {
        this.props.history.push('/stretching'); 
    } 
    getInfo = () => {
        this.props.history.push('/Information'); 
    }

    render() {
        return(
            <div>
{/*NavBar*/}        
                <nav class="navbar navbar-dark color">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" id="euHabitnavbar" href="#">            
                        <svg width="30" height="30" class="d-inline-block align-text-top Logo">
                            <image href={LgeuHabit_white} width="30" height="30"/ >
                        </svg>
                        euHabit.
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={this.getHome}>Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link"  onClick={this.getProfile}>Profile</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link"  onClick={this.getResult}>Personal Recommendation</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Prevention and Intervention
                            </a>
                                <ul class="dropdown-menu color1" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" id="navoption"  onClick={this.getErgo}>Ergonomics setting</a></li>
                                    <li><a class="dropdown-item" id="navoption"  onClick={this.getStretching}>Stretching</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link"  onClick={this.getInfo}>Information</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/" type="submit" onClick={this.handleClick}>Sign Out</a>
                            </li>
                        </ul>
                    </div> 
                                           
                </div>
                </nav>

            </div>
        )
    }
}

export default withRouter(Navbar); 
