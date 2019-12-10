import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

export default class BarChartHorizontal2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        console.log('PROPS DATA BARCHART 2', this.props.data)
        return (
            <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer >
                    <BarChart data={this.props.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="location" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="temperature" fill="#F6B772" />
                        <Bar dataKey="humidity" fill="#33AEEF" />
                        <Bar dataKey="airPollution" fill="#B965D2" />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    };
}
