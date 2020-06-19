import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';
import {logOut} from '../actions/auth';

const AdminHeader = (props)=>{
    return (
        <header>
            <div class="header-container">
                <div class="wave-container">
                    <img src="/images/logo.png" class="logo"/> 
                </div>
                <div class="navigation-bar">
                    <nav class="navbar navbar-expand-md">
                        <div class="nav-container">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active"><a class="nav-link"><NavLink to="/admin" activeClassName="is-active" exact={true}>Admission Forms</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/imageUpload" activeClassName="is-active">Image Upload</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/newsUpload" activeClassName="is-active">News Upload</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/downloadsUpload" activeClassName="is-active">Upload PDF</NavLink></a></li>      
                            </ul>
                            <ul class="navbar-nav navbar-right">
                                <Link to="/"><button class="btn btn-warning btn-lg" onClick={()=>props.dispatch(logOut())}>Logout</button></Link> 
                            </ul>
                        </div> 
                    </nav> 
                </div>

            </div>
        </header>
        
    )
 }

export default connect () (AdminHeader);

