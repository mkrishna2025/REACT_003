import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuItems: [
                { label: "home", class: "main_menu_first main_current", path:"index.html"},
                { label: "about us", class: "main_menu_first", path:"about_us.html"},
                { label: "partners", class: "main_menu_first", path:"partners"},
                { label: "Services", class: "main_menu_first", path:"", isChilds: true, items:[
                    { label: "Application Development", class: "main_menu_second", path:"app_dev.html"},
                    { label: "Mobile Testing", class: "main_menu_second", path:"mobile_testing.html"},
                    { label: "CONSULTING", class: "main_menu_second", path:"consulting.html"}
                ] },
                { label: "Careers", class: "main_menu_first", path:"careers.html"},
                { label: "Contact us", class: "main_menu_first", path:"contact.html"},
            ]
        }
    }
    render(){
        return (
            <div id="header">
                <div class="container">
                    <h1><a href="index.html"></a></h1>
                    <div id="main_menu">
                        <ul>
                            {
                                this.state.menuItems.map(menu => {
                                    if(menu.isChilds){
                                        return <li class="first_list with_dropdown">
                                                <a href={menu.path} class={menu.class}>{menu.label}</a>
                                                <ul>
                                                    {menu.items.map(item => {
                                                        return <li class="second_list second_list_border"><a href={item.path} class={item.class}>{item.label}</a></li>
                                                    })}
                                                </ul>
                                            </li>
                                    }
                                    return <li class="first_list"><Link to={menu.path} class={menu.class}>{menu.label}</Link></li>;
                                })
                            }
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}