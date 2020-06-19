import React from 'react';
import {startRemoveNews} from '../actions/news';
import {connect} from 'react-redux';

const NewsComponent = (props)=>(
    <div class="news-item">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.isAuth?<button class="btn btn-danger btn-md" onClick={()=>{
            props.dispatch(startRemoveNews(props.id))
        }}>Delete</button >:(<div></div>)}
    </div>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect(mapStateToProps)(NewsComponent) ;
