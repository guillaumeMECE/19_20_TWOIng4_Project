import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';

export default (props) => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' exact component={Home} />
        <Route path='/admin' exact component={Admin} />
        <Route component={NotFound} />
    </Switch>
);