import React, { Component } from 'react';
import './login.css';
import Modal from 'react-modal';

import $ from 'jquery';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorUsername: '',
            errorPassword: '',
            errorMessages: [],
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    componentDidMount(){
        var button = $('#loginButton')[0];
        button.style.background = 'blue';
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
            alert('Validated Successfully');
            var formData = new FormData();
            formData.append('username', this.state.username);
            formData.append('password', this.state.password);

            /*fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists', {
                method: 'POST',
                body: formData
            }).then((response) => {
                debugger;
                if(response.status == 200){
                    return response.json();
                }
            }).then(response => {
                debugger;
                if(response.success){
                    if(response.data){
                        alert('Login Successfully');
                        this.props.history.push("home");
                    } else {
                        alert('Invalid Credentials');
                    }
                } else {
                    alert('Unknown Error');
                }
            }).catch((exception) => {
                debugger;
            });*/
            
            fetch('http://trainingkit.azurewebsites.net/api/Users/Login', {
                method: 'POST',
                body: formData
            }).then((response) => {
                if(response.status == 200){
                    return response.json();
                }
            }).then(response => {
                if(response.success){
                    if(response.data.IsValid){
                        alert('Login Successfully');
                        var role = response.data.Role;
                        var name = response.data.UserName;   
                        sessionStorage.setItem('menu', JSON.stringify(response.data.Menu));
                        sessionStorage.setItem('isLoggedIn', 'true');
                        sessionStorage.setItem('role', role);
                        sessionStorage.setItem('userName', name);
                        this.props.history.push("home");
                    } else {
                        alert('Invalid Credentials');
                    }
                } else {
                    alert('Unknown Error');
                }
            }).catch((exception) => {
                debugger;
            });
            
            //
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
                <input id="loginButton" type="submit" value="Login" onClick={this.onLogin.bind(this)} />
            </div>
            <button onClick={this.openModal}>Sign UP</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    User Name 
                    <input type='text' />
                    Password
                    <input type='text' />
                    <input type='button' value="Register" />
                </form>
            </Modal>
        </div>;
    }
}