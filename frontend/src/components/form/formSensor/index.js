import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FormSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickUpdate: false,
            isClickCreateMeasure: false,
            value: '',
            type: '',
        };
    }

    handleClickUpdateSensor() {
        this.setState({ isClickUpdate: true });
    }

    handleChangeSensor(event) {
        this.setState({ value: event.target.value });
    }

    handleClickCreateMeasure() {
        this.setState({ isClickCreateMeasure: true });
    }

    handleChangeMeasureType(event) {
        this.setState({ type: event.target.value });
    }

    handleChangeMeasure(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>

                {this.state.isClickUpdate ?
                    <Paper className={makeStyles(theme => ({
                        paper: {
                            padding: theme.spacing(2),
                            textAlign: 'center',
                            color: "#ffffff",
                            backgroundColor: '#3B3F54',
                            verticalAlign: 'middle',
                        },
                    }))}>
                        <TextField
                            id="outlined-basic"
                            label="New Location"
                            variant="outlined"
                            helperText='(entrance/bedroom/livingroom/bathroom)'
                            name={this.state.value}
                            style={{ margin: '20px' }}
                            onChange={(e) => this.handleChangeSensor(e)} />
                        <Button
                            className="btn-update-measure"
                            variant="contained"
                            style={{ marginTop: '25px' }}
                            onClick={() => this.props.onClick(this.state.value)}>
                            Update Location
                </Button>
                    </Paper> :
                    <Button
                        className="btn-update-measure"
                        variant="contained"
                        style={{ marginBottom: '10px' }}
                        onClick={() => this.handleClickUpdateSensor()}>
                        Update Location
               </Button>}

                {/* CREATE MEASURE */}

                {this.state.isClickCreateMeasure ?
                    <Paper className={makeStyles(theme => ({
                        paper: {
                            padding: theme.spacing(2),
                            textAlign: 'center',
                            color: "#ffffff",
                            backgroundColor: '#3B3F54',
                            verticalAlign: 'middle',
                        },
                    }))}>
                        <TextField
                            id="outlined-basic"
                            label="Type"
                            helperText='(temperature/airPollution/humidity)'
                            variant="outlined"
                            name={this.state.value}
                            style={{ margin: '20px' }}
                            onChange={(e) => this.handleChangeMeasureType(e)} />
                        <TextField
                            id="outlined-basic"
                            label="Value"
                            variant="outlined"
                            name={this.state.value}
                            style={{ margin: '20px' }}
                            onChange={(e) => this.handleChangeMeasure(e)} />
                        <Button
                            className="btn-update-measure"
                            variant="contained"
                            style={{ marginTop: '25px' }}
                            onClick={() => this.props.onClickToCreate(this.state.value, this.state.type)}>
                            Create Measure
                </Button>
                    </Paper> :
                    <Button
                        className="btn-update-measure"
                        variant="contained"
                        style={{ marginBottom: '10px', marginLeft: '5px' }}
                        onClick={() => this.handleClickCreateMeasure()}>
                        Create Measure
               </Button>}

            </div >
        )
    }
}

