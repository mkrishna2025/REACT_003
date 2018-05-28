import React, { Component } from 'react';
import './demo.css';

import { Link } from 'react-router-dom';

import Header from '../../components/header';

export default class Demo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header />
                <div id="main_content">


                    <div class="ss1_wrapper">

                    <a href="#" class="slideshow_prev"><span>Previous</span></a>
                    <a href="#" class="slideshow_next"><span>Next</span></a>

                    <div class="slideshow_paging"></div>

                    <div class="slideshow_box">
                        <div class="data"></div>

                    </div>

                    <div id="slideshow_1" class="slideshow">

                        <div class="slideshow_item">
                        <div class="image"><a href="#"><img src="photos/1.jpg" alt="photo 1" height="304" /></a></div>
                        <div class="data">

                            <p class="bold_text"> We believe in perfectionism because it is the key to success...</p>
                            <a href="who_we_are.html"><span class="more_info">More info.. </span></a><span class="more_info"></span> </div>

                        </div>

                        <div class="slideshow_item">
                        <div class="image"><a href="#"><img src="photos/2.jpg" alt="photo 2"  height="304" /></a></div>
                        <div class="data">

                            <p class="bold_text">Dedication, Persistence and Passion is our belief to reach Heights ... </p>
                            <a href="staffing.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
                        </div>
                        </div>


                        <div class="slideshow_item">
                        <div class="image"><a href="#"><img src="photos/3.jpg" alt="photo 3" /></a></div>
                        <div class="data">

                            <p class="bold_text">Best Technology , Simple and User friendly is our Approach...</p>
                            <a href="app_dev.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
                        </div>
                        </div>

                        <div class="slideshow_item">
                        <div class="image"><a href="#"><img src="photos/4.jpg" alt="photo 4" /></a></div>
                        <div class="data">

                            <p class="bold_text"> Integrated Quality and committed service is our motto... </p>
                            <a href="offshore_dev.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
                        </div>
                        </div>

                        <div class="slideshow_item">

                        <div class="image"><a href="#"><img src="photos/5.jpg" alt="photo 5" height="304" /></a></div>
                        <div class="data">

                            <p class="bold_text">We dream because we do ...</p>
                            <a href="careers.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
                        </div>
                        </div>

                    </div>

                    </div>

                    <div id="mid_content">

                    <div class="container">

                        <div class="mid_content_info mid_content_space">

                        <h2 id="clean">WHO WE ARE</h2>
                        <p>Bixenta Info Technologies Pvt Ltd is an innovative full-service IT outsourcing company, offering reliably affordable.... `</p>
                        <a href="who_we_are.html"><img src="images/arrow_right.png" alt="arrow right" />Read More</a>

                        </div>

                        <div class="mid_content_info mid_content_space">

                        <h2 id="responsive">OFFSHORE DEVELOPMENT</h2>
                        <p>Bixenta Info Technologies Pvt Ltd is a offshore software development and information technology company, delivering consulting,...</p>
                        <a href="offshore_dev.html"><img src="images/arrow_right.png" alt="arrow right" />Read More</a>

                        </div>

                        <div class="mid_content_info mid_content_space">

                        <h2 id="fully">MISSION & VISION</h2>
                        <p>To be among the top-league players in the gaming industry thus providing the best games and mobile applications for the users...</p>
                        <a href="about_us.html"><img src="images/arrow_right.png" alt="arrow right" />Read More</a>

                        </div>
                        <div class="mid_content_info mid_content_space">

                        <h2 id="news_events">NEWS &amp; EVENTS</h2>
                        <p>Bixenta is formed in 2012 with a mission to accomplish the turnkey solutions for software industry especially in gaming... </p>
                        <a href="#"><img src="images/arrow_right.png" alt="arrow right" />Read More</a>

                        </div>

                    </div>



                    </div>






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

                        <p id="copyright">&copy; Copyright 2013 -Bixenta Info Private Limited. All rights reserved. </p>

                        <a href="index.html" id="footer_logo">Bixenta</a>

                    </div>

                    </div>
                </div>
            </div>
        );
    }
}