import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

import Select from './select';
import AreaChart from '../areaChart';

const API_URL = 'http://localhost:3030/api';

export default class WidgetTemp extends Component {
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
            console.log('data Select', data);

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    async fetchDataChart(id = 'null') {
        try {
            const { data } = await axios.get(`${API_URL}/temperaturebylocation/${id}`)
            console.log('data Chart area', data.data);
            this.setState({ DataChart: data.data.temp });

        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    };

    handleUpdateInputAutocomplete(event, value) {
        console.log(value);
        this.fetchDataChart(value._id);
    }

    render() {
        // let usersList = data.users.map((user, e) => this.renderUsers(user, e))
        // let publicationsList = this.state.focus.feed.map((publication, e) => this.renderPublications(publication, e))

        return (
            <div className="WidgetTemp">
                <div className="SelectCountry" >
                    <Select name='Location' selectList={this.state.DataSelect} handleChange={(e, value) => this.handleUpdateInputAutocomplete(e, value)} />
                </div>
                <AreaChart data={this.state.DataChart} />
            </div>
        );
    }
}
