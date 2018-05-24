import React, { Component } from 'react';
import './home.css';

import { AxiosProvider, Get, withAxios } from 'react-axios'

export default class Home extends Component {
    constructor(props){
        super(props);
        //alert('constructor');
        this.state = {
            students: []
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
        return (
            <div> 
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