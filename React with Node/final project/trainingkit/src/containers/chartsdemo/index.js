import React from "react";
import { LineChart, Brush, BarChart  } from 'react-d3-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as d3 from 'd3';

export default class Charts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {label: '', values: [
                {x: new Date(2015, 2, 5), y: 1},
                {x: new Date(2015, 2, 6), y: 2},
                {x: new Date(2015, 2, 7), y: 0},
                {x: new Date(2015, 2, 8), y: 3},
                {x: new Date(2015, 2, 9), y: 2},
                {x: new Date(2015, 2, 10), y: 3},
                {x: new Date(2015, 2, 11), y: 4},
                {x: new Date(2015, 2, 12), y: 4},
                {x: new Date(2015, 2, 13), y: 1},
                {x: new Date(2015, 2, 14), y: 5},
                {x: new Date(2015, 2, 15), y: 0},
                {x: new Date(2015, 2, 16), y: 1},
                {x: new Date(2015, 2, 16), y: 1},
                {x: new Date(2015, 2, 18), y: 4},
                {x: new Date(2015, 2, 19), y: 4},
                {x: new Date(2015, 2, 20), y: 5},
                {x: new Date(2015, 2, 21), y: 5},
                {x: new Date(2015, 2, 22), y: 5},
                {x: new Date(2015, 2, 23), y: 1},
                {x: new Date(2015, 2, 24), y: 0},
                {x: new Date(2015, 2, 25), y: 1},
                {x: new Date(2015, 2, 26), y: 1}
            ]},
            data2: [{
                label: 'somethingA',
                values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
            }]/*,
            
            xScale: d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70]),
            xScaleBrush: d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70])
        */}
    }
    render() {
        return (
            <BarChart
        data={this.state.data2}
        width={400}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
    );
    }
}