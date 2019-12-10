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
          <Paper className={classes.paper}> {props.obj.az ? 'Location :' : 'Value :'}<br /> {props.obj.az || props.obj.type}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{props.obj.az ? 'Creation Date :' : 'Person in House :'}<br /> {props.obj.type}</Paper>
        </Grid>
        {props.obj.type === 'user' ? <Grid item xs={12}>
          <Paper className={classes.paper}>{'House Size :'}<br /> {props.obj.type}</Paper>
        </Grid>
          :
          false}
      </Grid>
    </div>
  );
}

