import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FormMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            value: ''
        };
    }

    handleClickUpdateMeasure() {
        this.setState({ isClick: true });
    }

    handleClickForUpdateMeasure() {
        console.log('event.target.value', this.state.value);

    }
    handleChangeMeasure(event) {
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
                            label="New Value"
                            variant="outlined"
                            name={this.state.value}
                            style={{ margin: '20px' }}
                            onChange={(e) => this.handleChangeMeasure(e)} />
                        <Button
                            className="btn-update-measure"
                            variant="contained"
                            style={{ marginTop: '25px' }}
                            onClick={() => this.handleClickForUpdateMeasure()}>
                            Update Value
                </Button>
                    </Paper> :
                    <Button
                        className="btn-update-measure"
                        variant="contained"
                        style={{ marginBottom: '10px' }}
                        onClick={() => this.handleClickUpdateMeasure()}>
                        Update Value
               </Button>}

            </div >
        )
    }
}

