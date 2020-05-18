import React from 'react';
import {startAddImage} from '../actions/gallery';
import {connect} from 'react-redux';
import ImageComponent from '../components/editImageComponent';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:null,
            description:''
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
    

    onChange=(e)=>{
        const url=e.target.files[0]
        this.setState(()=>({
            url
        }))
    }

    onSubmit=(e)=>{
        e.preventDefault(); 
        this.props.dispatch(startAddImage({
            url:this.state.url,
            description:this.state.description
        }))
        alert("Image has been added to gallery")
    }

    
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <input type="file" onChange={this.onChange}/>
                <p>Address:<textarea type="text" onChange={this.onDescriptionChange} placeholder="Add Image Description"/></p>
                <button>Upload</button>
            </form>
            {this.props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(ImageUpload); 