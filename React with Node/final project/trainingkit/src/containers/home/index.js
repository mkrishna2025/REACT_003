import React, { Component } from 'react';
import './home.css';

import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);
        //alert('constructor');
        debugger;
        var menu = JSON.parse(sessionStorage.getItem('menu'));
        this.state = {
            students: [],
            menuItems: menu || []
        }
    }
    componentWillMount(){
        //alert('componentWillMount');
    }

    componentDidMount(){
        //alert('componentDidMount');
        fetch("http://trainingkit.azurewebsites.net/api/Users/GetAttendees")
        .then(response => {
            //debugger;
            if(response.status == 200){
                return response.json();
            }
        })
        .then(response => {
            //debugger;
            this.setState({ students: response.data });
        })
        .catch(reason => {
            debugger;
        })
    }
    componentWillUnMount(){
        //alert('componentWillUnMount');
    }
    render() {
        //alert('render');
        var username = sessionStorage.getItem('userName');
        return (
            <div> 
                Welcome to {username}
                <ul>
                    {this.state.menuItems.map(menu => <li><Link to={menu.Path} >{menu.Label}</Link> </li>)}
                </ul>
                Using Hyperlink
                <ul>
                    {this.state.menuItems.map(menu => <li><a href={menu.path}>{menu.Label}</a> </li>)}
                </ul>
                <table class="studentsTable">
                    <thead>
                        <tr>
                            <td class="studentsTd"> Name</td>
                            <td class="studentsTd"> Age</td>
                            <td class="studentsTd"> City</td>
                            <td style={{ width: 200}}> Department</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student => <tr>
                            <td> {student.Name} </td>
                            <td> {student.Age} </td>
                            <td> {student.Gender} </td>
                            <td> {student.Department} </td>
                        </tr>
                        ) }
                    </tbody>
                </table> 
        </div> );
    }
}