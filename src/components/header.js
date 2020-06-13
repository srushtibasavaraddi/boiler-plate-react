import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';
 const Header = (props)=>{
    return (
        <header>
            
            <div class="main-header-container">
                <img src="/images/logo.png" class="logo"/>
                <p class="address-text">Sampige Nagar, Dharwad, Karnataka 580008</p>
            </div>
            <nav class="navbar navbar-expand-md">
                <div class="nav-container">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a class="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/registration" activeClassName="is-active">Resgistration</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink></a></li>
                    </ul>
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item"><Link to="/login"><button class="btn btn-primary">Login</button></Link> </li>
                    </ul>
                </div> 
            </nav> 

            <h4>{props.announcement}</h4>
            
                
            
        </header>
    )
}


const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Header);
