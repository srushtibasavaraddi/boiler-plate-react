import React from 'react';
import {startRemoveImg} from '../actions/gallery';
import {connect} from 'react-redux';


const ImageComponent = (props)=>(

    <div class="col-sm-6 col-md-6">

        <div class="image-container">
            <a class="lightbox" href={props.url} data-size="1600x1067">
                <img id="myImg" alt="picture" src={props.url} class="img-fluid"/>
            </a>
            <div class="overlay">
                {props.description}&nbsp;
                {props.isAuth?<button class="btn btn-danger btn-lg del-button" onClick={()=>{
                props.dispatch(startRemoveImg({id:props.id,imgName:props.imgName}))
                 }}>Delete</button>:(<div/>)}
            </div>
        </div>
        
        

        

    </div>
    
);



const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})



export default connect(mapStateToProps)(ImageComponent) ;
