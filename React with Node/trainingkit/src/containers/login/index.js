import React, { Component } from 'react';
import './login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorUsername: '',
            errorPassword: '',
            errorMessages: []
        };
    }
    
    onLogin(){
        
        var errorUsername = '';
        var errorPassword = '';
        var messages = [];
        
        var isValid = true;
        
        if(this.state.username == '') {
            errorUsername = 'Please enter UserName';
            messages.push(errorUsername);
            isValid = false;
        }
        
        if(this.state.password == '') {
            errorPassword = 'Please enter Password';
            messages.push(errorPassword);
            isValid = false;
        }
        
        this.setState({
            errorUsername: errorUsername,
            errorPassword: errorPassword,
            errorMessages: messages
        });
        
        if(isValid){
            // Redirect to Home Scren
            alert('Valided Successfully');
            this.props.history.push("home");
        }
        
    }
    
    getErrorMessages(){
        var items = [];
        
        for(var error of this.state.errorMessages){
            items.push(<li style={{ color: 'red'}}> {error} </li>);
        }
        
        return items;
    }
    
    render() {
        return <div>
            <h3> {this.props.title} </h3>
            <div>
              <label>UserName</label>
                <input type="text" id="username" name="username" onChange={ event => this.state.username = event.target.value } placeholder="Your UserName.." />
                <span style={{ color: 'red'}}>{this.state.errorUsername} </span>
                <br/>
                <label>Password</label>
                <input type="text" id="password" name="password" onChange={ event => this.state.password = event.target.value } placeholder="Your Password.." />
                <span style={{ color: 'red'}}> {this.state.errorPassword}</span>
                <br/>
                <ul>
                    {this.getErrorMessages()}
                </ul>
                <input type="submit" value="Login" onClick={this.onLogin.bind(this)} />
            </div>
            </div>;
    }
}