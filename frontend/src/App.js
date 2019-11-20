import React from 'react';
import './App.css';
import Drawer from './components/drawer/index';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from './components/bottomNavigation/index';
import GridList from './components/gridList'
import { Box } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hidden xsDown>
          <Drawer />
        </Hidden>
        <Hidden smUp>
          <Box m={2}>
            <GridList isSmall="true" />
          </Box>
          <BottomNavigation />
        </Hidden>
      </header>
    </div>
  );
}

export default App;
