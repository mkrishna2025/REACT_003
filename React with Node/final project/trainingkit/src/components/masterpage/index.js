import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

export default class MasterPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer copyright="Copyright 2013 -Bixenta Info Private Limited. All rights reserved." />
            </div>
        );
    }
}