import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="footer">
                <div class="container">
                    <div id="footer_connect" class="footer_info">
                    <h4>connect with us</h4>
                    <ul>
                        <li><a href="#" id="facebook" title="Facebook"></a></li>
                        <li></li>
                        <li></li>
                        <li><a href="#" id="linkedin" title="LinkedIn"></a></li>
                        <li><a href="#" id="skype" title="Skype"></a></li>
                        <li></li>
                    </ul>
                    </div>
                    <p id="copyright">&copy; {this.props.copyright} </p>
                    <a href="index.html" id="footer_logo">Bixenta</a>
                </div>
            </div>
        );
    }
}