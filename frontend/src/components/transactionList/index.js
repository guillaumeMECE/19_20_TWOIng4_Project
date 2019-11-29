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
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


export default function TransactionList() {
    const classes = useStyles();

    return (
        <List className={classes.root}   style={{ overflow: 'auto'}}>
        <ListItem alignItems="flex-start">
 
            <ListItemText
              primary="300€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remboursement pulls
                  </Typography>
                  {" - Loisirs"}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">

            <ListItemText
              primary="15€"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    BBQ
                  </Typography>
                  {" — Loisirs"}
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
                    Dejeuner
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
                    Dejeuner
                  </Typography>
                  {" — Professionnel"}
                </React.Fragment>
              }
            />
          </ListItem>


        </List>
      );
    }