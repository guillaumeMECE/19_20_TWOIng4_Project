import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 200,
      margin: theme.spacing(3),
    },
    padding: 150,
    startAdornment: 'white',

    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInputAdornment-focused': {
      color: 'white'
    },
    '& .MuiInputAdornment-positionStart': {
      color: 'white'
    },
    '& MuiTypography-colorTextSecondary': {
      color: 'white'
    },


  },

  textField: {
    width: 200,
    backgroundColor: '#3B3F54',
    borderRadius: '4px',
    "&$focused": {
      color: '#FFFFFF'
    }

  },

  input: {
    color: 'white',
    "&$focused": {
      color: '#FFFFFF'
    }
  }
}));


export default function LayoutTextFields() {
  const classes = useStyles();
  const defaultProps = {
    options: tag,
    getOptionLabel: option => option.tag,
  };









  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>



        <TextField
          id="montant"
          label="Montant"
          className={classes.textField}
          type="number"
          margin="normal"
          InputProps={{ className: classes.input/*, startAdornment: <InputAdornment position="start" color="secondary">€</InputAdornment> */ }}
          InputLabelProps={{ className: classes.input }}
          color="secondary"





        />

        <Autocomplete
          {...defaultProps}
          id="tag"
          className={classes.textField}
          debug
          renderInput={params => <TextField {...params}
            label="Tag"
            margin="normal"
            fullWidth
            //InputProps={{ className: classes.input }}

            InputLabelProps={{ className: classes.input }} />}
        />



        <TextField
          id="motif"
          label="Motif"
          className={classes.textField}
          type="text"
          margin="normal"
          InputProps={{ className: classes.input }}
          InputLabelProps={{ className: classes.input }}


        />


      </div>
    </form>
  );
}

const tag = [
  { tag: 'Loisirs' },
  { tag: 'Professionnel' },
  { tag: 'Remboursement' },

];

