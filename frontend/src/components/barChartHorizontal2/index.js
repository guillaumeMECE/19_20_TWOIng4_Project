// import React, { PureComponent } from 'react';
// import {
//     BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
// } from 'recharts';
// import data from './data'

// export default class BarChartHorizontal2 extends PureComponent {

//     fetchData() {
//         return data
//     };

//     render() {
//         return (
//             <div style={{ width: '90%', height: 250 }}>
//                 <ResponsiveContainer >
//                     <BarChart data={this.fetchData()}
//                         layout='vertical'>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis type="number" />
//                         <YAxis type="category" dataKey="name" />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="5-50" fill="#30C9AC" />
//                         <Bar dataKey="50-100" fill="#F6B772" />
//                         <Bar dataKey="100-+" fill="#" />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         );
//     };
// }





import React, { PureComponent } from 'react';
import axios from 'axios';
import {
    BarChart, Bar, XAxis, Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const API_URL = 'http://localhost:3030/api';
export default class BarChartHorizontal2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // componentDidMount() {
    //     this.fetchData();
    // }

    // async fetchData() {
    //     try {
    //         const { data } = await axios.get(`${API_URL}/averageMeasureByLocation`)
    //         this.setState({ Data: data.data });
    //         console.log('data', data.data);

    //     } catch (error) {
    //         console.log('ERROR MESSAGE :', error.message);
    //         console.log('ERROR :', error);
    //     }
    // };

    render() {

        console.log('PROPS DATA BARCHART 2',this.props.data)
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
