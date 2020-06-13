import React from 'react';
import {connect} from 'react-redux';
import NewsComponent from '../components/editNewsComponent';

const News = (props)=>(

    <div class="container">
        
        <div class="box1">

            <img src="/images/pic6.jpg" class="image"/>

            <div class="text">
                <h1 class="quote">"Education is our passport to the future. For tomorrow belongs to the people who prepare it today."</h1> <br/>
                <p>A school is a medium of learning for children and is often regarded as a place of worship for the students. Writing an essay on my school is quite common among students. Here we have essays on My School of different lengths which would prove quite helpful to your children. You can choose the essay as per your length requirement and you shall find that essays have been written in quite easy to understand yet crisp language.</p>
            </div>
           
        </div>

        <div class="news-container">
            <div class="title">
                <h1 >Latest News</h1>
            </div>
            {props.news.map((item) => 
                <div class="news"> 
                    <NewsComponent key={item.id} {...item}/>
                </div> )}
        </div>

    </div>
   
);

const mapStateToProps = (state)=>({
    news:state.news
});

export default connect(mapStateToProps)(News);