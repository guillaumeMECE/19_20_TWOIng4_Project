import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FormSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            value: ''
        };
    }

    handleClickUpdateSensor() {
        this.setState({ isClick: true });
    }



    handleChangeSensor(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>

                {this.state.isClick ?
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

            </div >
        )
    }
}

