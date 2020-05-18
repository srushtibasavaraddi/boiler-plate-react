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
            <div>
                Admission Registration Form!
                <form onSubmit={this.onSubmit}>
                    <p>First Name:<input type="text" onChange={this.onFirstNameChange} placeholder="First Name"/></p>
                    <p>Last Name:<input type="text" onChange={this.onLastNameChange} placeholder="Last Name"/></p>
                    Class:
                    <Dropdown options={[1,2,3,4,5,6,7,8,9]}  onChange={this.onGradeChange}
                    value={this.state.grade.toString()} placeholder="Select Grade"/>
                    <p>Father's Name:<input type="text" onChange={this.onFatherNameChange} placeholder="Father's Name"/></p>
                    <p>Mother's Name:<input type="text" onChange={this.onMotherNameChange} placeholder="Mother's Name"/></p>
                    <p>Phone Number:<input value={this.state.phoneNo} type="text" onChange={this.onPhoneChange} placeholder="Phone Number"/></p>
                    <p>Address:<textarea type="text" onChange={this.onAddressChange} placeholder="Address With Pincode"/></p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect ()(Registration);