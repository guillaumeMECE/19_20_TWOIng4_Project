import React, { PureComponent } from 'react';
import axios from 'axios';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import data from './data.json'


const API_URL = 'http://localhost:3030/api';

export default class AreaChartComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // off = gradientOffset();
    // gradientOffset() {
    //     const dataMax = Math.max(...this.state.Data.map(i => i.value));
    //     const dataMin = Math.min(...this.state.Data.map(i => i.value));

    //     if (dataMax <= 0) {
    //         return 0;
    //     }
    //     if (dataMin >= 0) {
    //         return 1;
    //     }

    //     return dataMax / (dataMax - dataMin);
    // };
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const { data } = await axios.get(`${API_URL}/temperaturebylocation`)
            this.setState({ Data: data.data[0].temp });
            console.log('data AREA', data.data);

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };
    // fetchData() {
    //     return data
    // };

    render() {
        return (
            <div style={{ width: '100%', height: 200, borderRadius: '20px' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={this.state.Data}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}

                    >
                        {/* <CartesianGrid strokeDasharray="1 1" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                {/* <stop stopColor="#30C9AC" stopOpacity={0.9} /> */}
                                <stop stopColor="#F6B772" stopOpacity={0.7} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#F6B772" fill="url(#splitColor)" isAnimationActive={false} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    };
}
