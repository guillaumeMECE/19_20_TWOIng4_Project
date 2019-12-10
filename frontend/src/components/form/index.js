import React, { Component } from 'react';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import FormMeasure from './formMeasure';
import FormSensor from './formSensor';
import axios from 'axios';

const API_URL = 'http://localhost:3030/api';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: this.props.obj,

    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ obj: newProps.obj })
  }

  renderSize(size) {
    switch (size) {
      case 'small':
        return (<div>
          <HomeIcon fontSize="small" />
          <HomeIcon color="disabled" />
          <HomeIcon fontSize="large" color="disabled" />
        </div>)
      case 'medium':
        return (<div>
          <HomeIcon fontSize="small" color="disabled" />
          <HomeIcon />
          <HomeIcon fontSize="large" color="disabled" />
        </div>)
      case 'big':
        return (<div>
          <HomeIcon fontSize="small" color="disabled" />
          <HomeIcon color="disabled" />
          <HomeIcon fontSize="large" />
        </div>)
      default:
        break;
    }
  }

  updateValueMeasure(v) {
    console.log('props.obj._id', this.props.obj._id);

    return axios.patch(`${API_URL}/measures/${this.props.obj._id}`,
      { value: v });
  }

  async handleClickForUpdateMeasure(v) {
    console.log('event.target.value', v);
    try {
      await this.updateValueMeasure(v);
      const newObj = this.state.obj;
      newObj.data.value = v;
      this.setState({ obj: newObj })
    } catch (error) {
      console.log('ERROR MESSAGE :', error.message);
      console.log('ERROR :', error);
    }

  }

  updateLocationSensor(v) {
    console.log('props.obj._id', this.props.obj._id);

    return axios.patch(`${API_URL}/sensors/${this.props.obj._id}`,
      { location: v });
  }

  async handleClickForUpdateSensor(v) {
    console.log('event.target.value', v);
    try {
      await this.updateLocationSensor(v);
      const newObj = this.state.obj;
      newObj.data.location = v;
      this.setState({ obj: newObj })
      window.location.reload(true);
    } catch (error) {
      console.log('ERROR MESSAGE :', error.message);
      console.log('ERROR :', error);
    }
  }

  createMeasure(v, t) {
    console.log('props.obj._id', this.props.obj._id);

    return axios.post(`${API_URL}/measures`,
      {
        value: v,
        type: t,
        sensorID: this.props.obj._id,
      });
  }

  async handleClickForCreateMeasure(v, t) {
    console.log('event.target.value IIIIICCCCCIIII', v, t);
    try {
      await this.createMeasure(v, t);
      // const newObj = this.state.obj;
      // newObj.data.location = v;
      // this.setState({ obj: newObj })
      window.location.reload(true);
    } catch (error) {
      console.log('ERROR MESSAGE :', error.message);
      console.log('ERROR :', error);
    }
  }

  render() {
    return (
      <div className='Form' >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={makeStyles(theme => ({
              paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: "#ffffff",
                backgroundColor: '#3B3F54',
                verticalAlign: 'middle'
              },
            }))}> {'Type :'} <br />{this.state.obj.type}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={makeStyles(theme => ({
              paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: "#ffffff",
                backgroundColor: '#3B3F54',
                verticalAlign: 'middle'
              },
            }))}>
              {this.state.obj.type === 'measure' ?
                'Value :' : 'Location :'}
              <br />
              {this.state.obj.type === 'measure' ?
                this.state.obj.data.value :
                this.state.obj.type === 'no selection' ?
                  '' :
                  this.state.obj.data.location}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={makeStyles(theme => ({
              paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: "#ffffff",
                backgroundColor: '#3B3F54',
                verticalAlign: 'middle'
              },
            }))}>
              {this.state.obj.type === 'user' ?
                'Persons in House :' : 'Creation Date :'}
              <br />
              {this.state.obj.type === 'user' ?
                this.state.obj.data.personsInHouse :
                this.state.obj.type === 'no selection' ?
                  '' :
                  this.state.obj.data.creationDate}
            </Paper>
          </Grid>
          {this.state.obj.type === 'user' ?
            <Grid item xs={12}>
              <Paper className={makeStyles(theme => ({
                paper: {
                  padding: theme.spacing(2),
                  textAlign: 'center',
                  color: "#ffffff",
                  backgroundColor: '#3B3F54',
                  verticalAlign: 'middle'
                },
              }))}>
                {"Size :"}
                <br />
                {this.renderSize(this.state.obj.data.houseSize)}

              </Paper>
            </Grid>
            :
            false}
          <Grid item xs={12}>
            {this.state.obj.type === 'measure' ?
              <FormMeasure id={this.state.obj._id} onClick={(v) => this.handleClickForUpdateMeasure(v)} /> :
              this.state.obj.type === 'sensor' ?
                <FormSensor id={this.state.obj._id} onClick={(v) => this.handleClickForUpdateSensor(v)} onClickToCreate={(v, t) => this.handleClickForCreateMeasure(v, t)} /> :
                ''}

          </Grid>
        </Grid>
      </div>
    );
  }
}




