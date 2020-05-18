import React from 'react';
import {startRemoveImg} from '../actions/gallery';
import {connect} from 'react-redux';

const ImageComponent = (props)=>(
    <div>
        <img src={props.url}/>
        <p>{props.description}</p>
        <button onClick={()=>{
            props.dispatch(startRemoveImg({id:props.id,imgName:props.imgName}))
        }}>delete</button>
    </div>
);

export default connect()(ImageComponent) ;
