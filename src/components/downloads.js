import React from 'react';
import { connect } from 'react-redux';
import DownloadComponent from '../components/editDownloadComponent';
import selector from '../selectors/downloadSelect';
import {sortGrade} from '../actions/filter';
import Dropdown from 'react-dropdown';

const Downloads =(props)=>{
    return (
        <div>
            downloads
            <Dropdown options={[1,2,3,4,5,6,7,8,9]} onChange={(e)=>{
                props.dispatch(sortGrade(e.value));
            }
            }
            value={props.grade.toString()} placeholder="Select Grade"/>
            {props.downloads.map((item)=><DownloadComponent key={item.id} {...item}/>)}
        </div>
    );
}


const mapStateToProps = (state)=>({
    downloads:selector(state.downloads,state.filter.grade),
    grade:state.filter.grade
});


export default connect(mapStateToProps)(Downloads);
