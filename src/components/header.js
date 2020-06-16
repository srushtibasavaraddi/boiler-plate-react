import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';



 const Header = (props)=>{
    return (
        <header>
            <div class="wave-container">
                <img src="/images/logo.png" class="logo"/>
                <p class="address-text">Sampige Nagar, Dharwad, Karnataka 580008</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EF4036" fill-opacity="0.9" d="M0,224L80,186.7C160,149,320,75,480,58.7C640,43,800,85,960,106.7C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <nav class="navbar navbar-expand-md">
                <div class="nav-container">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item active"><a class="nav-link"><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/registration" activeClassName="is-active">Registration</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink></a></li>
                    </ul>
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item"><Link to="/login"><button class="btn btn-warning btn-lg">Login</button></Link> </li>
                    </ul>
                </div> 
            </nav> 

            
            
        </header>
    )
}


const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Header);
