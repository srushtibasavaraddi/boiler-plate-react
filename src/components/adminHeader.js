import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';
import {logOut} from '../actions/auth';

 const AdminHeader = (props)=>{
    return (
        <header>
            <div>
                <h1>Basavaraddi English Medium School!</h1>
                <button onClick={()=>props.dispatch(logOut())}>LogOut</button>
            </div>
            <div>
                <NavLink to="/admin" activeClassName="is-active" exact={true}>Admission Forms</NavLink>
                <NavLink to="/imageUpload" activeClassName="is-active">Image Upload</NavLink>
                <NavLink to="/newsUpload" activeClassName="is-active">News Upload</NavLink>
                <NavLink to="/downloadsUpload" activeClassName="is-active">Upload PDF</NavLink>
            </div>
            
        </header>
    )
 }
 
export default connect () (AdminHeader);
