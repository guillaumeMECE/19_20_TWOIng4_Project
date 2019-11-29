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
      position: 'relative',
      marginBottom: '100px',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


export default function TopInList() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div style={{ overflowY: 'scroll'}}>
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




        </List>
        </div>
        </div>
        
      );
    }