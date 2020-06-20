import React from 'react';
import { connect } from 'react-redux';
import StudComponent from '../components/studComponent';
import selector from '../selectors/select';
import {sortByDate,sortByGrade} from '../actions/filter';

const ShowSubs = (props)=>(
    <div class="jumbotron">

        <div class="wrapper">

            <div class="heading">
                <h1>New submissions list</h1>
            </div>

            <div class="sub-container">

                <p class="sub-heading">Sort By:&nbsp;
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

                <p class="sub-heading">Total number of entries: {props.submissions.length}</p>

        </div>

            <div class="submission">
                <div class="row mt-3" >
                    {props.submissions.map((stud)=><StudComponent key={stud.id} {...stud}/>)}          
                </div>
            <div class="spacer5"></div>
            </div>
        

        </div>
        
    </div>
);

const mapStateToProps = (state)=>({
    submissions:selector(state.submissions,state.filter),
    filter:state.filter
});

export default connect(mapStateToProps)(ShowSubs);