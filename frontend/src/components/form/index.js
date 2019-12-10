import React from 'react';
import './style.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyledRating from '@material-ui/lab/Rating';
import HomeIcon from '@material-ui/icons/Home';

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
