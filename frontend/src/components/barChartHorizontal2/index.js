import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import data from './data'

export default class BarChartHorizontal2 extends PureComponent {

    fetchData() {
        return data
    };

    render() {
        return (
            <div style={{ width: '90%', height: 250 }}>
                <ResponsiveContainer >
                    <BarChart data={this.fetchData()}
                        layout='vertical'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="5-50" fill="#30C9AC" />
                        <Bar dataKey="50-100" fill="#F6B772" />
                        <Bar dataKey="100-+" fill="#" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    };
}
