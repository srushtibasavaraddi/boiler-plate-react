import React from 'react';
import {connect} from 'react-redux';
import {startRemoveDownload} from '../actions/dowloads';

const DownloadComponent = (props)=>(
    <div>
        <a href={props.url}>Download</a>
        <p>{props.description}</p>
        {props.isAuth?<button onClick={()=>{
            props.dispatch(startRemoveDownload({id:props.id,downloadName:props.downloadName}))
        }}>delete</button>:(<div/>)}
        
    </div>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect(mapStateToProps)(DownloadComponent) ;
