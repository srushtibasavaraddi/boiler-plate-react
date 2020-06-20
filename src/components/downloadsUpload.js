import React from 'react';
import {startAddDownload} from '../actions/dowloads';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown';
import DownloadComponent from '../components/editDownloadComponent';
import selector from '../selectors/downloadSelect';
import {sortGrade} from '../actions/filter';


class DownloadsUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:null,
            description:'',
            grade:0
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

    onGradeChange=(e)=>{
        const grade=e.value;
        this.setState(()=>({
            grade
        }))
        this.props.dispatch(sortGrade(grade));
    }
    

    onChange=(e)=>{
        const url=e.target.files[0]
        this.setState(()=>({
            url
        }))
    }

    onSubmit=(e)=>{
        e.preventDefault(); 
        this.props.dispatch(startAddDownload({
            url:this.state.url,
            description:this.state.description,
            grade:this.state.grade
        }))
        alert(`File has been added to grade ${this.state.grade}`)
    }

    render() {
        return (
            <div>
            <div class="container-fluid-2">
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-md-4">
                        <div class="wrapper2">
                                <h1 class="heading">Upload Resources</h1>
                        </div>
                        <form class="form-container" onSubmit={this.onSubmit}>

                        <div class="form-group">
                            <label for="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" class="form-control input-lg" onChange={this.onChange}/>
                        </div>

                            <div class="form-group">
                                <label for="InputGrade">Class</label>
                                <Dropdown  variant="success" id="dropdown-basic" titleHelper="Grade" options={[1,2,3,4,5,6,7,8,9]}  onChange={this.onGradeChange}
                                value={this.state.grade.toString()} placeholder="Select Grade"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="InputDescription">Description</label>
                                <textarea type="text" onChange={this.onDescriptionChange} placeholder="Add Description" class="form-control" id="InputDescription" aria-describeby="description here" />
                            </div>
        
                            <button type="submit" class="btn btn-info btn-block">Upload</button>

                        </form>
                    
                    </div>

                </div>

                <div class="wrapper2">
                            <h1 class="heading">Posted Resources</h1>
                </div>

                

                <div class="form-container">
                            
                            <div class="row justify-content-center">
                                <div class="col-sm-7 col-md-6">
                                    {this.props.downloads.map((item)=> <div class="list">
                                        <DownloadComponent key={item.id} {...item}/>
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
    downloads:selector(state.downloads,state.filter.grade),
    grade:state.filter.grade
});

export default connect(mapStateToProps)(DownloadsUpload); 