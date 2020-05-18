import React from 'react';
import {startRemoveNews} from '../actions/news';
import {connect} from 'react-redux';

const NewsComponent = (props)=>(
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button onClick={()=>{
            props.dispatch(startRemoveNews(props.id))
        }}>delete</button>
    </div>
);

export default connect()(NewsComponent) ;
