import React from 'react';
import { connect } from 'react-redux';
import StudComponent from '../components/studComponent';
import selector from '../selectors/select';
import {sortByDate,sortByGrade} from '../actions/filter';

const ShowSubs = (props)=>(
    <div>
        <h3>New submission list</h3>
        <p>Sort By:
            <select value={props.filter.sortBy} onChange={(e)=>{
                if(e.target.value==="date"){
                    props.dispatch(sortByDate())
                }else if(e.target.value==="grade"){
                    props.dispatch(sortByGrade())
                }
            }}>
                <option value="date">Date</option>
                <option value="grade">Grade</option>
            </select>
        </p>
        <p>Total number of entries: {props.submissions.length}</p>
        {props.submissions.map((stud)=><StudComponent key={stud.id} {...stud}/>)}
    </div>
);

const mapStateToProps = (state)=>({
    submissions:selector(state.submissions,state.filter),
    filter:state.filter
});

export default connect(mapStateToProps)(ShowSubs);