import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';

 const Header = (props)=>{
    return (
        <header>
            <div>
                <h1>Basavaraddi English Medium School!</h1>
                <Link to="/login">
                    <button>Login</button>
                </Link> 
            </div>
            <div>
                <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink to="/registration" activeClassName="is-active">Resgistration</NavLink>
            </div>
            
        </header>
    )
 }
 



export default connect () (Header);
