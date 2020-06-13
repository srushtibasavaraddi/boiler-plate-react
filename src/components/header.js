import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';
 const Header = (props)=>{
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a class="nav-link"  data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/registration" activeClassName="is-active">Resgistration</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></a></li>
                        <li class="nav-item"><a class="nav-link"><NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink></a></li>
                    </ul>
                </div> 
                <div>
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item"><Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0">Login</button></Link> </li>
                    </ul>
                </div>
            </nav>  

            <div class="main-header-container">
                <span><h1 class="header-text">Basavaraddi English Medium School</h1></span>
                <span><img src="/images/logo.png" className="logo"/></span>
            </div>

            <h4>{props.announcement}</h4>
            
                
            
        </header>
    )
}


const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Header);
