import React from 'react';
import { connect } from 'react-redux';
import ImageComponent from '../components/editImageComponent';
// import selector from '../selectors/select';
// import {sortByDate,sortByGrade} from '../actions/filter';

const Gallery = (props)=>(

    <div>
        {this.props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}
    </div>
);

const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(Gallery);

// <figure class="col-md-4">
//                             {props.gallery.map((img) => <img class="image"> 
//                             <ImageComponent key={img.id} {...img}/>
//                             </img>)}
//                         </figure> 

