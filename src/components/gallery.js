import React from 'react';
import { connect } from 'react-redux';
import ImageComponent from '../components/editImageComponent';
// import selector from '../selectors/select';
// import {sortByDate,sortByGrade} from '../actions/filter';

const Gallery = (props)=>(

    <div class="gallery container">

        <div class="row">

            <div class="col-md-12">

                <div id="mdb-lightbox-ui"></div>

                    <div class="mdb-lightbox no-margin">

                        <figure class="col-md-4">
                            {props.gallery.map((img) => <img class="image"> 
                            <ImageComponent key={img.id} {...img}/>
                            </img>)}
                        </figure> 
                        
                    </div>
            </div>
        </div>
    </div>
    
);

const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(Gallery);