import React from 'react';
import { connect } from 'react-redux';
import ImageComponent from '../components/editImageComponent';
// import selector from '../selectors/select';
// import {sortByDate,sortByGrade} from '../actions/filter';

const Gallery = (props)=>(

   
                        <figure class="col-md-4">
                            {props.gallery.map((img) => <img class="image"> 
                            <ImageComponent key={img.id} {...img}/>
                            </img>)}
                        </figure> 
                        
                  
    
);

const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(Gallery);