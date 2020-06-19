import React from 'react';
import { connect } from 'react-redux';
import DownloadComponent from '../components/editDownloadComponent';
import selector from '../selectors/downloadSelect';
import {sortGrade} from '../actions/filter';
import Dropdown from 'react-dropdown';

const Downloads =(props)=>{
    return (
        <div class="jumbotron">

            <div class="downloads-container">

                <div class="heading">
                    <h1>Study material availabale for download</h1>
                </div>

                <div class="sub-container">

                    <p class="sub-heading">Select Grade:</p>

                    <div class="dropdown-container">

                        <Dropdown titleHelper="Classes" title="Select Grade" options={[1,2,3,4,5,6,7,8,9]} onChange={(e)=>{
                            props.dispatch(sortGrade(e.value));
                        }
                        }
                        value={props.grade.toString()}/>
                        {props.downloads.map((item)=><DownloadComponent key={item.id} {...item}/>)}

                    </div>

                </div>

            
            </div>
            
        </div>
    );
}


const mapStateToProps = (state)=>({
    downloads:selector(state.downloads,state.filter.grade),
    grade:state.filter.grade
});


export default connect(mapStateToProps)(Downloads);
