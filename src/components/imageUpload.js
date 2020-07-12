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
        alert("Image has been added to gallery");
    }

    render() {
        return (
            <div>
                <div class="container-fluid-2">
                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-md-4">
                            <div class="wrapper2">
                                <h1 class="heading">Upload Images</h1>
                            </div>
                            <form className="form-container" onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputFile">Image input</label>
                                    <input type="file" onChange={this.onChange} id="exampleInputFile" className="form-control"/>
                                </div>

                                <div class="form-group">
                                     <label for="InputDescription">Description</label>
                                     <textarea type="text" onChange={this.onDescriptionChange} placeholder="Add Image Description" className="form-control" id="InputDescription" aria-describeby=" image description here" />
                                </div>
                                <button type="submit" class="btn btn-info btn-block">Upload</button>
                            </form>
                        </div>
                    </div>

                    
                    
                </div>

                <div class="container gallery-container">
                        <div class="tz-gallery">
                            <div class="row">
                                {this.props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}   
                            </div>
                        </div> 
                </div> 


            
            </div>
            
        )
    }
}


const mapStateToProps = (state)=>({
    gallery:state.gallery
});

export default connect(mapStateToProps)(ImageUpload); 



// <div>
//                 <div class="container-fluid-2">
//                     <div class="row justify-content-center">
//                         <div class="col-sm-6 col-md-4">
//                             <div class="wrapper2">
//                                     <h1 class="heading">Upload Images</h1>
//                             </div>

//                             <form class="form-container" onSubmit={this.onSubmit}>

//                                 <div class="form-group">
//                                     <label for="exampleInputFile">Image input</label>
//                                     <input type="file" id="exampleInputFile" class="form-control"/>
//                                 </div>

//                                 <div class="form-group">
//                        container-fluid             <label for="InputDescription">Description</label>
//                                     <textarea type="text" onChange={this.onDescriptionChange} placeholder="Add Image Description" class="form-control" id="InputDescription" aria-describeby=" image description here" />
//                                 </div>

//                                 <button type="submit" class="btn btn-info btn-block">Upload</button>

//                             </form>

//                         </div>

//                     </div>

//                 </div>
//             {this.props.gallery.map((img)=><ImageComponent key={img.id} {...img}/>)}
//             </div>