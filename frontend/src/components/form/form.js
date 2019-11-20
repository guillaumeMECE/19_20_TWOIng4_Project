import React, { Component } from 'react'
import './form.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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


const theme = createMuiTheme({
    overrides: {
      MuiInputLabel: { // Name of the component ⚛️ / style sheet
        root: { // Name of the rule
          color: "orange",
          "&$focused": { // increase the specificity for the pseudo class
            color: "blue"
          }
        }
      }
    }
  });


export default function LayoutTextFields() {
  const classes = useStyles();
  const defaultProps = {
      options: motif,
      getOptionLabel: option => option.tag,
    };
  

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>



<ThemeProvider theme={theme}>
      <TextField value="value" label="label" />
    </ThemeProvider>


        {/* <TextField
          id="montant"
          label="Montant"
          className={classes.textField}
          type="number"
          margin="normal"
          InputProps={{ className: classes.input }}
          InputLabelProps={{className: classes.input }}
        /> */}

        <Autocomplete
        {...defaultProps}
        id="tag"
        className={classes.textField}
        debug
        renderInput={params => <TextField {...params} 
        label="Tag" 
        margin="normal" 
        fullWidth         
        InputProps={{ className: classes.input }}
        InputLabelProps={{className: classes.input }}/>}
      />

        <TextField
          id="motif"
          label="Motif"
          className={classes.textField}
          type="text"
          margin="normal"
          InputProps={{ className: classes.input }}
          InputLabelProps={{className: classes.input }}


        />

       
      </div>
    </form>
  );
}

const motif = [
    {tag: 'Loisirs'},
    {tag: 'Professionnel'},
    {tag: 'Remboursement'},

];

