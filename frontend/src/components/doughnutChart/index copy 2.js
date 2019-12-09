import React, { PureComponent } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, RadialBarChart, RadialBar
} from 'recharts';
import './style.css';
import data from './data.json';

const API_URL = 'http://localhost:3030/api';


const COLORS = ['#3a82d9', '#3890d0', '#369ec8', '#34adbe', '#32bbb5', '#30c9ac'];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 3) * cos;
    const sy = cy + (outerRadius + 3) * sin;
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 3}
                outerRadius={outerRadius + 7}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333"> {` ${(percent * 100).toFixed()}%`}</text>
        </g>
    );
};


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
            const { data } = await axios.get(`${API_URL}/airpollutionbylocation`)
            this.setState({ Data: data.data });
            console.log('data piechart', data.data);

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };
    state = {
        activeIndex: 0,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    // fetchData = () => {
    //     return data
    // };


    style = {
        top: 0,
        left: 250,
        lineHeight: '24px',
    };
    render() {

        return (
            // <Grid container spacing={3}>
            // <Grid item xs={8}>
            <div style={{ width: '100%', height: 238 }}>
                <ResponsiveContainer>
                    <RadialBarChart cx={120} innerRadius={20} outerRadius={140} barSize={10} data={this.state.Data}>
                        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="airPollution" />
                        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={this.style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            // </Grid>
            //         {/* <Grid item xs={4} style={{ paddingTop: '5%' }}>
            //             {
            //                 data.map((entry, index) =>
            //                     <div className="lib" key={`lib-${index}`} style={{ backgroundColor: COLORS[index % COLORS.length] }} >
            //                         {entry.name}
            //                     </div>)
            //             }
            //         </Grid> */}
            // {/* </Grid> */ }
        );
    }
}
