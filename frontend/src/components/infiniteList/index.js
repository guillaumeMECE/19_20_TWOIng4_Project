import React, { PureComponent }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

// import './style.css';
const API_URL = 'http://localhost:3030/api';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     flexWrap: 'wrap',
//     overflowY: 'scroll',
//     height: '80%',

//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));



  export default class InfiniteList extends PureComponent {
    
    constructor(props) {
      super(props);
      this.state = {Data:[]};
    }
    componentDidMount() {
      this.fetchData();
    }
    
    async fetchData() {
      try {
        const { data } = await axios.get(`${API_URL}/avgsensorsbyhousesize`);
        
        
        this.setState({ Data: data.data });
        
      } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
      }
    };
    
    
    
    
    render(){
      return ( 
        <div 
        className={makeStyles(theme => ({
          
            width: '100%',
            flexWrap: 'wrap',
            overflowY: 'scroll',
            height: '80%',
        
            backgroundColor: theme.palette.background.paper,
          
        }))}
        >
      {this.state.Data.map((obj, index) => (
        <div>
          <ListItem alignItems="flex-start">

            <ListItemText
              primary={obj.houseSize}

              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={makeStyles(theme => ({
                      
                        display: 'inline',
                      
                    }))}
                    color="textPrimary"
                  >
                    {obj.sensors}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" component="li" />

        </div>
      ))}
    </div>

)
}
}