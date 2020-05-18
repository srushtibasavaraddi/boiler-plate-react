import React from 'react';
import { connect } from 'react-redux';
import ImageComponent from '../components/imageComponent';
// import selector from '../selectors/select';
// import {sortByDate,sortByGrade} from '../actions/filter';

const Gallery = (props)=>(
    <div>
        {props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}
    </div>
);

const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(Gallery);