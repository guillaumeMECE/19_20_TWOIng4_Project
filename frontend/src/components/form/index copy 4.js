import React from 'react';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import FormMeasure from './formMeasure'
import axios from 'axios';

const API_URL = 'http://localhost:3030/api';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffffff",
    backgroundColor: '#3B3F54',
    verticalAlign: 'middle'
  },
}));


export default function Form(props) {
  const classes = useStyles();

  const updateValueMeasure = (v) => {
    console.log('props.obj._id', props.obj._id);

    return axios.patch(`${API_URL}/measures/${props.obj._id}`,
      { value: v });
  }

  const handleClickForUpdateMeasure = async (v) => {
    console.log('event.target.value', v);
    await updateValueMeasure(v);
    props.obj.data.value = v;

  }

  return (
    <div className='Form'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> {'Type :'} <br />{props.obj.type}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {props.obj.type === 'measure' ?
              'Value :' : 'Location :'}
            <br />
            {props.obj.type === 'measure' ?
              props.obj.data.value :
              props.obj.type === 'no selection' ?
                '' :
                props.obj.data.location}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {props.obj.type === 'user' ?
              'Persons in House :' : 'Creation Date :'}
            <br />
            {props.obj.type === 'user' ?
              props.obj.data.personsInHouse :
              props.obj.type === 'no selection' ?
                '' :
                props.obj.data.creationDate}
          </Paper>
        </Grid>
        {props.obj.type === 'user' ?
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {"Size :"}
              <br />
              {renderSize(props.obj.data.houseSize)}

            </Paper>
          </Grid>
          :
          false}
        <Grid item xs={12}>
          {props.obj.type === 'measure' ?
            <FormMeasure id={props.obj._id} onClick={(v) => handleClickForUpdateMeasure(v)} /> :
            ''}

        </Grid>
      </Grid>
    </div>
  );
}



const renderSize = (size) => {
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
