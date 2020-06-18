import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export const PublicRoute = ({
    component:Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(<div><Header/><Component {...props}/><Footer/></div>)}/>
);

export default PublicRoute;
