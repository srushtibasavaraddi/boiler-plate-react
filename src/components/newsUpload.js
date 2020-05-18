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
        console.log(this.state.announcement)
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
            <form onSubmit={this.onSubmit}>
                Add news
                <input type="text" onChange={this.onTitleChange}/>
                <p>description<textarea type="text" onChange={this.onDescriptionChange} placeholder="Add a crisp news description"/></p>
                <button>Upload</button>
            </form>

            <form onSubmit={this.onAnnouncement}>
                <p>Announcement<textarea type="text" onChange={this.onAnnouncementChange} placeholder="Add a crisp news announcement"/></p>
                <button>Upload</button>
            </form>
            {this.props.news.map((item)=><NewsComponent key={item.id} {...item}/>)}
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    news:state.news
});


export default connect(mapStateToProps)(NewsUpload); 