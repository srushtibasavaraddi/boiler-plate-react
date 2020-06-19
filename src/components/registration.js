import React from 'react';
import {startAddSubmission} from '../actions/submissions';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import moment from 'moment';

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            address:'',
            phoneNo:0,
            fatherName:'',
            motherName:'',
            grade:0
        }
    }
    onFirstNameChange=(e)=>{
        const firstName=e.target.value;
        this.setState(()=>({
            firstName
        }))
    }

    onLastNameChange=(e)=>{
        const lastName=e.target.value;
        this.setState(()=>({
            lastName
        }))
    }

    onFatherNameChange=(e)=>{
        const fatherName=e.target.value;
        this.setState(()=>({
            fatherName
        }))
    }

    onMotherNameChange=(e)=>{
        const motherName=e.target.value;
        this.setState(()=>({
            motherName
        }))
    }

    onAddressChange=(e)=>{
        const address=e.target.value;
        this.setState(()=>({
            address
        }))
    }

    onGradeChange=(e)=>{
        const grade=e.value;
        this.setState(()=>({
            grade
        }))
    }

    onPhoneChange=(e)=>{
        const phoneNo=e.target.value;
        if(phoneNo.match(/^\d{0,10}/)){
            this.setState(()=>({
                phoneNo
            }))
        }
    }
    

    onSubmit=(e)=>{
        e.preventDefault(); 
        this.props.dispatch(startAddSubmission({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            phoneNo:parseInt(this.state.phoneNo,10),
            fatherName:this.state.fatherName,
            mothersName:this.state.mothersName,
            grade:this.state.grade,
            createdAt:moment().valueOf()
        }));
        alert("form submitted successesfully");
        this.props.history.push('/');
        
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-center registration-form">
                    <div class="col-sm-6 col-md-4">
                        <form class="form-container" onSubmit={this.onSubmit} >
                            <div class="form-header">
                                <h4 class="title">Register</h4>
                            </div>

                            <div class="form-group">
                                <label for="InputFirstName">First Name</label>
                                <input type="text" class="form-control" id="InputFirstName" aria-describeby="first name here" onChange={this.onFirstNameChange} required />
                            </div>

                            <div class="form-group">
                                <label for="InputLastName">Last Name</label>
                                <input type="text" class="form-control" id="InputLastName" aria-describeby="last name here" onChange={this.onLastNameChange} required  />
                            </div>

                            <div class="form-group"> 
                                <label for="InputLastName">Class</label>
                                <Dropdown options={[1,2,3,4,5,6,7,8,9]}  onChange={this.onGradeChange}  value={this.state.grade.toString()} placeholder="Select Grade"/>
                            </div>

                            <div class="form-group">
                                <label for="InputFatherName">Father's name</label>
                                <input type="text" class="form-control" id="InputFatherName" aria-describeby="father's name here" onChange={this.onFatherNameChange} required  />
                            </div>

                            <div class="form-group">
                                <label for="InputMotherName">Mother's name</label>
                                <input type="text" class="form-control" id="InputMotherName" aria-describeby="mother's name here" onChange={this.onMotherNameChange} required  />
                            </div>

                            <div class="form-group">
                                <label for="InputPhoneNumber">Phone number</label>
                                <input value={this.state.phoneNo} type="text" onChange={this.onPhoneChange} placeholder="+91" class="form-control" id="InputPhoneNumber" aria-describeby="phone number here" required  />
                            </div>

                            <div class="form-group">
                                <label for="InputAddress">Address</label>
                                <textarea type="text" onChange={this.onAddressChange} placeholder="Address With Pincode" class="form-control" id="InputAddress" aria-describeby="address here"/>
                            </div>

                            <button type="submit" class="btn btn-success btn-block">Submit</button>

                        </form>

                    </div>

                </div>
               
            </div>
        )
    }
}

export default connect ()(Registration);