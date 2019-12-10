import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FormSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickCreateSensor: false,
            location: '',
        };
    }

    handleClickCreateSensor() {
        this.setState({ isClickCreateSensor: true });
    }

    handleChangeSensorLocation(event) {
        this.setState({ location: event.target.value });
    }

    render() {
        return (
            <div>

                {/* CREATE SENSOR */}

                {this.state.isClickCreateSensor ?
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
                            label="Location"
                            helperText='(entrance/livingroom/bathroom/bedroom)'
                            variant="outlined"
                            name={this.state.location}
                            style={{ margin: '20px' }}
                            onChange={(e) => this.handleChangeSensorLocation(e)} />
                        <Button
                            className="btn-update-measure"
                            variant="contained"
                            style={{ marginTop: '25px' }}
                            onClick={() => this.props.onClickToCreate(this.state.location)}>
                            Create Sensor
                </Button>
                    </Paper> :
                    <Button
                        className="btn-update-measure"
                        variant="contained"
                        style={{ marginBottom: '10px', marginLeft: '5px' }}
                        onClick={() => this.handleClickCreateSensor()}>
                        Create Sensor
               </Button>}

            </div >
        )
    }
}

