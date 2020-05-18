import React from 'react';
import {logIn} from '../actions/auth';
import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            error:'',
            userName:'',
            password:'',
        }
    }
    
    onUserNameChange=(e)=>{
        const userName=e.target.value;
        this.setState(()=>({
            userName
        }))
    }

    onPasswordChange=(e)=>{
        const password=e.target.value;
        this.setState(()=>({
            password
        }))
    }

    onSubmit=(e)=>{
        e.preventDefault(); 
        if(this.state.userName==='admin' && this.state.password==='admin'){
            this.props.dispatch(logIn());
            this.props.history.push('/admin');
        }
        else{
            this.setState(()=>({
                error:'Incorrect userId or Password'
            }))
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>{this.state.error}</p>
                    <p>Username<input type="text" onChange={this.onUserNameChange} placeholder="First Name"/></p>
                    <p>password<input type="password" onChange={this.onPasswordChange} placeholder="Last Name"/></p>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect() (Login);