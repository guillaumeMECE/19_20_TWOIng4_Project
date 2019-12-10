import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

export default class AreaChartComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div style={{ width: '100%', height: 200, borderRadius: '20px' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={this.props.data}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}

                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
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
