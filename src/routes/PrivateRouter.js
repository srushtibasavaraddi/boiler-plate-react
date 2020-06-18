import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import AdminHeader from '../components/adminHeader';
import Footer from '../components/footer';

export const PrivateRoute = ({
    isAuth,
    component:Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(
        isAuth?(
            <div>
                <AdminHeader/>
                <Component {...props}/>
                <Footer/>
            </div>
        ):(
            <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect (mapStateToProps) (PrivateRoute);