import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/header';

export const PublicRoute = ({
    component:Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(<div><Header/><Component {...props}/></div>)}/>
);

export default PublicRoute;
