import React, { Component } from 'react';
import './demo.css';

import { Link } from 'react-router-dom';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

import arrow_right from '../../images/arrow_right.png';

import MasterPage from '../../components/masterpage';

class SlideshowComponent extends Component {
    render(){
        const { image, alt, description } = this.props;

        return <div class="slideshow_item">
                    <div class="image"><a href="#"><img src={image} alt={alt} /></a></div>
                    <div class="data">
                        <p class="bold_text">{description}</p>
                        <a href="app_dev.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
                    </div>
                </div>;
    }
}

const SlideshowComponentStateLessOld = (props) =>  <div class="slideshow_item">
<div class="image"><a href="#"><img src={props.image} alt={props.alt} /></a></div>
<div class="data">
    <p class="bold_text">{props.description}</p>
    <a href="app_dev.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
</div>
</div>;

const SlideshowComponentStateLess = ({ image, alt, description }) =>  <div class="slideshow_item">
<div class="image"><a href="#"><img src={image} alt={alt} /></a></div>
<div class="data">
    <p class="bold_text">{description}</p>
    <a href="app_dev.html"><span class="more_info">More info.. </span></a><span class="more_info"></span>
</div>
</div>;


export default class Demo extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <MasterPage>
                <div id="main_content">
                    <div class="ss1_wrapper">
                    <a href="#" class="slideshow_prev"><span>Previous</span></a>
                    <a href="#" class="slideshow_next"><span>Next</span></a>
                    <div class="slideshow_paging"></div>
                    <div class="slideshow_box">
                        <div class="data"></div>
                    </div>
                    <div id="slideshow_1" class="slideshow">
                        <SlideshowComponentStateLess image={image1} alt="photo 1" description="We believe in perfectionism because it is the key to success..." />
                        <SlideshowComponentStateLess image={image2} alt="photo 2" description="Dedication, Persistence and Passion is our belief to reach Heights ..." />
                        <SlideshowComponentStateLess image={image3} alt="photo 3" description="Best Technology , Simple and User friendly is our Approach..." />
                        <SlideshowComponentStateLess image={image4} alt="photo 4" description="Integrated Quality and committed service is our motto..." />
                        <SlideshowComponentStateLess image={image5} alt="photo 5" description="We dream because we do ..." />
                    </div>
                    </div>
                    <div id="mid_content">
                    <div class="container">
                        <div class="mid_content_info mid_content_space">
                        <h2 id="clean">WHO WE ARE</h2>
                        <p>Bixenta Info Technologies Pvt Ltd is an innovative full-service IT outsourcing company, offering reliably affordable.... `</p>
                        <a href="who_we_are.html"><img src={arrow_right} alt="arrow right" />Read More</a>

                        </div>
                        <div class="mid_content_info mid_content_space">
                        <h2 id="responsive">OFFSHORE DEVELOPMENT</h2>
                        <p>Bixenta Info Technologies Pvt Ltd is a offshore software development and information technology company, delivering consulting,...</p>
                        <a href="offshore_dev.html"><img src={arrow_right} alt="arrow right" />Read More</a>
                        </div>
                        <div class="mid_content_info mid_content_space">
                        <h2 id="fully">MISSION & VISION</h2>
                        <p>To be among the top-league players in the gaming industry thus providing the best games and mobile applications for the users...</p>
                        <a href="about_us.html"><img src={arrow_right} alt="arrow right" />Read More</a>
                        </div>
                        <div class="mid_content_info mid_content_space">
                        <h2 id="news_events">NEWS &amp; EVENTS</h2>
                        <p>Bixenta is formed in 2012 with a mission to accomplish the turnkey solutions for software industry especially in gaming... </p>
                        <a href="#"><img src={arrow_right} alt="arrow right" />Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </MasterPage>

        );
    }
}