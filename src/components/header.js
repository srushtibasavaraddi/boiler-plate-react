import React from "react";
import {NavLink,Link} from 'react-router-dom';  
import {connect} from 'react-redux';
 const Header = (props)=>{
    return (
        <header>
            <div >
                <h4>{props.announcement}</h4>
                <Link to="/login">
                    <button >Login</button>
                </Link> 
            </div>
            <div>
                <img src="/images/logo.png" className="logo"/>
            </div>
            <div>
                <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink to="/registration" activeClassName="is-active">Resgistration</NavLink>
                <NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink>
                <NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink>
            </div>    
              
        </header>
    )
}


const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Header);
