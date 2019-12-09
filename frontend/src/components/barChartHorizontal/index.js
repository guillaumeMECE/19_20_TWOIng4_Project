import React, { PureComponent } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import data from './data'

const API_URL = 'http://localhost:3030/api';
export default class BarChartHorizontal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const { data } = await axios.get(`${API_URL}/sensorsbylocation`)
            this.setState({ Data: data.data });
            console.log('data', data.data);

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    render() {
        // console.log('sensors count', this.fetchData());

        return (
            <div style={{ width: '90%', height: 250 }}>
                <ResponsiveContainer >
                    <BarChart data={this.state.Data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="location" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sensors" fill="#30C9AC" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    };
}
