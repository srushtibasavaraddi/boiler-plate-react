import React from 'react';
import {startRemoveNews} from '../actions/news';
import {connect} from 'react-redux';

const NewsComponent = (props)=>(
    <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.isAuth?<button onClick={()=>{
            props.dispatch(startRemoveNews(props.id))
        }}>delete</button>:(<div></div>)}
        
    </div>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect(mapStateToProps)(NewsComponent) ;
