import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';


// const trigger = useScrollTrigger();
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      flexWrap: 'wrap',
      overflowY: 'scroll',
      height:'250px',

      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


export default function ListTop5() {
    const classes = useStyles();

    return (
      <div className={classes.root}>

{[{"titre":"300€",'lab1':'Remboursement pulls', 'lab2':'Loisirs'}, {"titre":"1200€",'lab1':'Salaire','lab2':'Professionnel'}, {"titre":"300€",'lab1':'Remboursement','lab2':'Loisirs'},{"titre":"30€",'lab1':'Cadeau','lab2':'Loisirs'}].map((obj, index) => (
<div>
<ListItem alignItems="flex-start">

<ListItemText
  primary={obj.titre}
  secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        className={classes.inline}
        color="textPrimary"
      >
        {obj.lab1}
      </Typography>
      {' - '.concat(obj.lab2)}
    </React.Fragment>
  }
/>
</ListItem>
      <Divider variant="middle" component="li" />

      </div>
  ))}


        
  </div>
  
);
}