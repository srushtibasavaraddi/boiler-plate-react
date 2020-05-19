import React from 'react';
import {connect} from 'react-redux';
import NewsComponent from '../components/editNewsComponent';

const News = (props)=>(
    <div>
        news
        {props.news.map((item)=><NewsComponent key={item.id} {...item}/>)}
    </div>
);

const mapStateToProps = (state)=>({
    news:state.news
});

export default connect(mapStateToProps)(News);