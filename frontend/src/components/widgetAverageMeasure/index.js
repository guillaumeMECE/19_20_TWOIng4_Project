import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

import Select from './select';
import BarChart from '../barChartHorizontal2';

const API_URL = 'http://localhost:3030/api';

export default class WidgetAverageMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.fetchDataSelect();
        this.fetchDataChart();
    }

    async fetchDataSelect() {
        try {
            const { data } = await axios.get(`${API_URL}/users/location`)
            this.setState({ DataSelect: data });
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    async fetchDataChart(id = 'null') {
        try {
            const { data } = await axios.get(`${API_URL}/averagemeasurebylocation/${id}`)
            this.setState({ DataChart: [data.data] });
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    handleUpdateInputAutocomplete(event, value) {
        if (value === null || value === undefined) {
            this.fetchDataChart();
        } else {
            this.fetchDataChart(value._id);
        }
    }

    render() {

        return (
            <div className="WidgetTemp">
                <div className="SelectCountry" >
                    <Select name='Location' selectList={this.state.DataSelect} handleChange={(e, value) => this.handleUpdateInputAutocomplete(e, value)} />
                </div>
                <BarChart data={this.state.DataChart} />
            </div>
        );
    }
}
