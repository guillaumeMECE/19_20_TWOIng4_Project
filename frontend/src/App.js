import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Drawer from './components/drawer/index';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from './components/bottomNavigation/index';
import { Box } from '@material-ui/core';
import Routes from './routes';

const renderPage = () => {
  return (<Routes />);
}

class App extends React.Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div className="App">
        <Hidden xsDown>
          <Drawer child={() => renderPage()} pathname={pathname} />
        </Hidden>
        <Hidden smUp>
          <Box m={2}>
            {renderPage()}
          </Box>
          <BottomNavigation />
        </Hidden>
      </div>
    );
  };
}

export default withRouter(props => <App {...props} />);