import React from 'react';
import {startAddNews} from '../actions/news';
import {connect} from 'react-redux';
import {startAddAnnoucement} from '../actions/annoucement';
import NewsComponent from '../components/editNewsComponent';

class NewsUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            announcement:''
        }
    }

    onDescriptionChange=(e)=>{
        const description=e.target.value;
        if(description.match(/^\d{0,30}/)){
            this.setState(()=>({
                description
            }))
        }
    }


    onAnnouncementChange=(e)=>{
        const announcement=e.target.value;
            this.setState(()=>({
                announcement
            }))
    }

    onTitleChange=(e)=>{
        const title=e.target.value;
        if(title.match(/^\d{0,20}/)){
            this.setState(()=>({
                title
            }))
        }
    }

    onAnnouncement=(e)=>{
        e.preventDefault(); 
        this.props.dispatch(startAddAnnoucement(this.state.announcement));
        alert("Annoucement added!");
    }

    onSubmit=(e)=>{
        e.preventDefault(); 
        this.props.dispatch(startAddNews({
            title:this.state.title,
            description:this.state.description
        }))
        alert("News added!")
    }

    render() {
        return (
            <div>
                <div class="container-fluid-2">
                    <div class="row justify-content-center" >
                        <div class="col-sm-6 col-md-4">
                            <div class="wrapper2">
                                <h1 class="heading">Upload News</h1>
                            </div>
                            <form class="form-container" onSubmit={this.onSubmit}>
                                
                                <div class="form-group">
                                    <label for="InputNewsTitle">News title</label>
                                    <input type="text" class="form-control" id="InputNewsTitle" aria-describeby="news title here"  onChange={this.onTitleChange}/>
                                </div>

                                <div class="form-group">
                                    <label for="InputNewsDescription">News Description</label>
                                    <textarea type="text" onChange={this.onDescriptionChange} placeholder="Add a crisp news description" class="form-control" id="InputNewsDescription" aria-describeby="news description here"/>
                                </div>

                                <button type="submit" class="btn btn-info btn-block">Upload</button>

                            </form>

                        </div>

                    </div>

                    <div class="row justify-content-center" >

                        <div class="col-sm-6 col-md-4">

                            <div class="wrapper2">
                                <h1 class="heading">Upload Announcement</h1>
                            </div>

                            <form class="form-container" onSubmit={this.onAnnouncement}>
                                <div class="form-group">
                                    <label for="InputAnnouncement">Add Announcement</label>
                                    <textarea type="text" onChange={this.onAnnouncementChange} placeholder="Add a crisp news announcement" class="form-control" id="InputAnnouncement" aria-describeby="announcement here"/>
                                </div>
                                <button type="submit" class="btn btn-info btn-block">Upload</button>
                            </form>

                        </div>
                    </div>

                    <div class="wrapper2">
                            <h1 class="heading">Posted Headlines</h1>
                    </div>
                    <div class="form-container">
                            
                        <div class="row justify-content-center">
                            <div class="col-sm-7 col-md-6">
                                        {this.props.news.map((item)=> <div class="list">
                                            <NewsComponent key={item.id} {...item}/>
                                        </div>)}
                                  
                            </div>
                        </div>
                    

                    </div>
                       

            

                </div>

            </div>
           
        )
    }
}


const mapStateToProps = (state)=>({
    news:state.news
});


export default connect(mapStateToProps)(NewsUpload); 