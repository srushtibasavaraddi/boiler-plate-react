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
            <div className="jumbotron">
            <div className="wrapper">
                <div class="heading">
                    <h1>Upload resources</h1>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.onChange}/>
                    <p>Grade :</p>
                    
                    <Dropdown  titleHelper="Grade" options={[1,2,3,4,5,6,7,8,9]}  onChange={this.onGradeChange}
                    value={this.state.grade.toString()} placeholder="Select Grade"/>
                    <p>Description:<textarea type="text" onChange={this.onDescriptionChange} placeholder="Add Description"/></p>
                    <button>Upload</button>
                </form>
                {this.props.downloads.map((item)=><DownloadComponent key={item.id} {...item}/>)}
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