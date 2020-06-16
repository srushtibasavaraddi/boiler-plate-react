import React from 'react';
import {connect} from 'react-redux';
import ShowSubs from '../components/showSubs';
const Admin = (props)=>(
    <div>
      
        admin
        <ShowSubs/>
    </div>
);

export default  connect()(Admin);