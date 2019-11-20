import React from 'react';
import './App.css';
import Drawer from './components/drawer/index';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from './components/bottomNavigation/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hidden xsDown>
          <Drawer />
        </Hidden>
        <Hidden smUp>
          <BottomNavigation />
        </Hidden>
      </header>
    </div>
  );
}

export default App;
