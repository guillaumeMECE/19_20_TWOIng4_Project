import React from 'react';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffffff",
    backgroundColor: '#3B3F54'
  },
}));

export default function Form(props) {
  const classes = useStyles();

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
        {props.obj.type === 'user' ? <Grid item xs={12}>
          <Paper className={classes.paper}>
            {'House Size :'}<br /> {props.obj.data.houseSize}</Paper>
        </Grid>
          :
          false}
      </Grid>
    </div>
  );
}

