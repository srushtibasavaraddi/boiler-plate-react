import React from 'react';
import { connect } from 'react-redux';
import ImageComponent from '../components/editImageComponent';
// import selector from '../selectors/select';
// import {sortByDate,sortByGrade} from '../actions/filter';

const Gallery = (props)=>(
    
    <div class="container gallery-container">
        <div class="tz-gallery">
            <div class="row">
                {props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}
            </div>
        </div> 
    </div>                    
);

const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(Gallery);