import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Form from '../../components/form';
import CardPreview from '../../components/cardPreview';
import Grid from '@material-ui/core/Grid';

const API_URL = 'http://localhost:3030/api';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { Obj: { type: 'no selection' } };
    }
    fetchDocument(obj) {
        switch (obj.type) {
            case 'user':
                return axios.get(`${API_URL}/users/${obj._id}`);
            case 'sensor':
                return axios.get(`${API_URL}/sensors/${obj._id}`);
            case 'measure':
                return axios.get(`${API_URL}/measures/${obj._id}`);
            default:
                break;
        }
    }

    async handleClick(obj) {
        const { data } = await this.fetchDocument(obj);
        obj.data = data;
        this.setState({ Obj: obj });

    }

    render() {
        return (
            <div className="Admin">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <CardPreview onClick={(obj) => this.handleClick(obj)} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Form obj={this.state.Obj} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Admin;
