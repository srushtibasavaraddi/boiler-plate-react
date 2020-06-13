import React from 'react';
import {connect} from 'react-redux';
import NewsComponent from '../components/editNewsComponent';

const News = (props)=>(
    <div class="news-container">
        <h1 class="title">Latest News</h1>
        {props.news.map((item) => 
            <div class="news"> 
                <NewsComponent key={item.id} {...item}/>
            </div> )}
    </div>
);

const mapStateToProps = (state)=>({
    news:state.news
});

export default connect(mapStateToProps)(News);