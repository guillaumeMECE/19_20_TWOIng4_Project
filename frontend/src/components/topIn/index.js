import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      flexWrap: 'wrap',
      //  overflow: 'hidden',
      // overflowY: 'scroll',
      // position: 'relative',
      //marginBottom: '100px',
      overflowY: 'scroll',
      height:'250px',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      //display: 'inline',
    },
  }));





export default function TopInList() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        



        {[{"titre":"titre1",'lab1':'hudjf', 'lab2':'caca'}, {"titre":"titre1",'lab1':'hudjf','lab2':'caca'}, {"titre":"titre1",'lab1':'hudjf','lab2':'caca'}].map((obj, index) => (
   <div >
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
  ))};


        
        </div>
        
      );
    }





    {/*           
        <List >
        <ListItem alignItems="flex-start">
            <ListItemText
              primary="200€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Virement mensuel
                  </Typography>
                  {" "}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="1200€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Prime fin d'année
                  </Typography>
                  {" — Professionnel"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="30€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remboursement
                  </Typography>
                  {" — Professionnel"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li" />

          <ListItem alignItems="flex-start">
          <ListItemText
              primary="10€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remboursement
                  </Typography>
                  {" — Loisir"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li" />

          <ListItem alignItems="flex-start">
          <ListItemText
              primary="10€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remboursement
                  </Typography>
                  {" — Loisir"}
                </React.Fragment>
              }
            />
          </ListItem>




        </List> */}