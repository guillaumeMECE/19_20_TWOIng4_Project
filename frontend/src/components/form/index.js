import React, { Component } from 'react';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import FormMeasure from './formMeasure'
import axios from 'axios';

const API_URL = 'http://localhost:3030/api';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: "#ffffff",
//     backgroundColor: '#3B3F54',
//     verticalAlign: 'middle'
//   },
// }));


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: this.props.obj,

    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ obj: newProps.obj })
    //console.log('PROOOOOOOOOOOOOOOPS :', this.state.obj);

    // if (this.props.obj.type === 'measure') {
    //   this.setState({ value: this.props.obj.data.value })
    //   console.log('value PROOOOOOOPS', this.props.obj.data.value);
    //   console.log('value STAAAAAAATE', this.state.value);
    // }
  }
  // componentDidMount() {
  //   console.log('PROOOOOOOOOOOOOOOPS :', this.state.obj);

  //   if (this.props.obj.type === 'measure') {
  //     this.setState({ value: this.props.obj.data.value })
  //     console.log('value PROOOOOOOPS', this.props.obj.data.value);
  //     console.log('value STAAAAAAATE', this.state.value);
  //   }
  // }

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
    // this.props.obj.data.value = v;

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
              ''}

          </Grid>
        </Grid>
      </div>
    );
  }
}




