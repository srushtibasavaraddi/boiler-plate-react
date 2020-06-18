import React from 'react';
import {logIn} from '../actions/auth';
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom'; 
import Footer from '../components/footer';

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
            
                    
                        <div class="container-fluid">
                            <div  class="row justify-content-center login-form">
                                <div class="col-sm-6 com-md-4">
                                    <form class="form-container" onSubmit={this.onSubmit}>
                                        <div class='form-group'>

                                            <div class="form-header">
                                                <h4 class="title">Login<i class="fa fa-user"></i></h4>
                                            </div>
                                            
                                            <label for ="InputUsername">Username</label>
                                            <input type="text" class="form-control" id="InputUsername" aria-describeby="username here"
                                            onChange={this.onUserNameChange} placeholder="Enter username"/>
                                        </div>

                                        <div class="form-group">
                                            <label for="InputPassword">Password</label>
                                            <input type="password" class="form-control" id="InputPassword" placeholder="Enter password" onChange={this.onPasswordChange} />
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block">Submit</button>

                                        <div class="form-footer">
                                            <p>Don't have an account?<a><NavLink to="/registration" activeClassName="is-active">Sign Up</NavLink></a></p>
                                        </div>

                                    </form>
                                </div>
                            
                        </div>
        
                    </div>   
        )
    }
}

export default connect() (Login);