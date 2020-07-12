import React from 'react';
import {connect} from 'react-redux';
import {startRemoveDownload} from '../actions/dowloads';

const DownloadComponent = (props)=>(
    <div class="resource-item">
        
        <p>{props.description}</p>
        <a href={props.url}>Download</a>&nbsp;
        <span>
            {props.isAuth?<button class="btn btn-danger btn-md" onClick={()=>{
                props.dispatch(startRemoveDownload({id:props.id,downloadName:props.downloadName}))
            }}>Delete</button>:(<div/>)}
        
        </span>
       
    </div>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect(mapStateToProps)(DownloadComponent) ;
