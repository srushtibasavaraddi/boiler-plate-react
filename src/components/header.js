import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';



 const Header = (props)=>{
    return (
        <header className="wrapperAnn">
            <div className="marquee">
                <p>{props.announcement}</p>    
            </div>
            
            <div class="header-container">
                <div class="wave-container">
                    <img src="/images/logo.png" class="logo"/> 
                </div>
                <div class="navigation-bar">
                    <nav class="navbar navbar-expand-md">
                        <div class="nav-container">
                            <ul class="navbar-nav mr-auto">

                                <li class="nav-item active"><a class="nav-link"><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/registration" activeClassName="is-active">Registration</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></a></li>
                                <li class="nav-item"><a class="nav-link"><NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink></a></li>
                            </ul>
                            <ul class="navbar-nav navbar-right">
                                <Link to="/login"><button class="btn btn-warning btn-lg">Login</button></Link> 
                            </ul>
                        </div> 
                    </nav> 
                </div>

            </div>
        </header>
    )
}


const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Header);
