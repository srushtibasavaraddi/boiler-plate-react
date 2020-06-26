import React from 'react';
import { connect } from 'react-redux';
import DownloadComponent from '../components/editDownloadComponent';
import selector from '../selectors/downloadSelect';
import {sortGrade} from '../actions/filter';
import Dropdown from 'react-dropdown';

const Downloads =(props)=>{
    return (
        <div className="jumbotron">
            <div className="wrapper">
                <div className="heading">
                    <h1>Study material availabale for download</h1>
                </div>
                
                <div className="sub-container">
                    <p className="sub-heading">Select Grade:</p>

                    <div className="dropdown-container">
                        <Dropdown titleHelper="Classes" title="Select Grade" options={[1,2,3,4,5,6,7,8,9]} onChange={(e)=>{
                            props.dispatch(sortGrade(e.value));
                        }
                        }
                        value={props.grade.toString()} placeholder="Select Grade"/>
                    </div>

                </div>

                    <div class="jumbotron">
                              
                            <div class="row">
                                <div class="col-sm-7 col-md-6">
                                    {props.downloads.map((item)=> <div class="list">
                                        <DownloadComponent key={item.id} {...item}/>
                                    </div>)}   
                                </div>
                                
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
