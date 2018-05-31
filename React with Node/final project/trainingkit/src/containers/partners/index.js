import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Partners extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header />
                <div class="partners"></div>
                <div id="main_content">
                    <div id="contact_area">
                    <div class="container">
                        <h2 id="contact">PARTNERS</h2>
                        <div id="contact_info">
                        <div id="contact_info_left" style={{ height: "500px" }} >
                            <h1>Under Maintenance</h1>
                        </div>
                    </div>
                    <div id="contact_info_right">
                    <div id="contact_info_right">
                        <form action="#" method="post" id="contact_form">
                        <fieldset>
                            <h3>Request a Free quote</h3>
                            <ol>
                            <li>
                                <label for="name">Name</label><input type="text" name="name" value="" size="30" maxlength="" id="name" />
                            </li>
                            <li>
                                <label for="email">Email Address</label><input type="text" name="email" value="" size="30" maxlength="" id="email" />
                            </li>
                            <li>
                                <label for="phone">
                                            phone</label><input type="text" name="phone" value="" size="30" maxlength="" id="phone" />
                            </li>
                            <li>
                                <label for="desc">Description</label><textarea name="desc" rows="5" cols="23" id="desc"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="SUBMIT" size="" maxlength="" />
                            </li>
                            </ol>
                        </fieldset>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
        );
    }
}