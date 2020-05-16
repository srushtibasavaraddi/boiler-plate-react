import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props)=>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boiler Plate</h1>
            <button className="button" onClick={()=>props.dispatch(startLogin())}>Login with Google</button>
        </div>
    </div>
);

export default connect()(Login);