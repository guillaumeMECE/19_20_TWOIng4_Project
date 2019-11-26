import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import data from './data.json'

const gradientOffset = () => {
    const dataMax = Math.max(...data.map(i => i.amount));
    const dataMin = Math.min(...data.map(i => i.amount));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class AccountStatement extends PureComponent {

    fetchData() {
        return data
    };

    render() {
        return (
            <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="#30C9AC" stopOpacity={0.9} />
                                <stop offset={off} stopColor="#F6B772" stopOpacity={0.9} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="amount" stroke="#9DA5AC" fill="url(#splitColor)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    };
}
