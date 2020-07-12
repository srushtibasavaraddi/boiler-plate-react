import React from 'react';
import {connect} from 'react-redux';
import NewsComponent from '../components/editNewsComponent';

const News = (props)=>(

    <div class="jumbotron"> 
        <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-8">
                <div class="box-1">
                    <img src="/images/pic6.jpg" class="image"/>
                    <div class="text">
                        <p class="quote">
                            <h3>" Education is our passport to the future. For tomorrow belongs to the people who prepare it today. "</h3>  
                        </p>
                        <p> The children of today are gearing up to become adult citizens of tomorrow. 
                                The growth is parallel to the future of our country, reflected through quality of the
                                present education system. A school must stimulate curiosity in the young,
                                impressionable minds and equip them with tools to be better human beings.
                        </p>
                    </div>
                </div>
                
            </div>

            <div class="col-xs-6 col-sm-6 col-md-4">
                <div class="news-container">
                    <div class="title">
                        <h2>Announcements</h2>
                    </div>
                    <div>
                        {props.news.map((item) => <div class="news"> 
                            <NewsComponent key={item.id} {...item}/>
                
                        </div>
                        )}
                    </div> 
                </div>
                

            </div>

        </div>

    </div>

   
);

const mapStateToProps = (state)=>({
    news:state.news,
});

export default connect(mapStateToProps)(News);