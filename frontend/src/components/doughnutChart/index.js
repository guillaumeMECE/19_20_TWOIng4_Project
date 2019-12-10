import React, { PureComponent } from 'react';
import axios from 'axios';
import {
    ResponsiveContainer, Legend, RadialBarChart, RadialBar
} from 'recharts';
import './style.css';

const API_URL = 'http://localhost:3030/api';


const COLORS = ['#B965D2', '#30C9AC', '#33AEEF', '#F6B772', '#32bbb5', '#30c9ac'];

export default class DoughnutChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const { data } = await axios.get(`${API_URL}/airpollutionbylocation`);

            data.data.forEach((element, id) => {
                element.fill = COLORS[id % COLORS.length];
            });

            this.setState({ Data: data.data });

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    style = {
        top: 0,
        left: 250,
        lineHeight: '24px',
    };
    render() {

        return (
            <div style={{ width: '100%', height: 238 }}>
                <ResponsiveContainer>
                    <RadialBarChart cx={120} innerRadius={20} outerRadius={140} barSize={10} data={this.state.Data}>
                        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="airPollution" />
                        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={this.style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
