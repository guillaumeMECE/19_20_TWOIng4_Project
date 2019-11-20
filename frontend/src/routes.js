import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Transaction from './pages/Transaction';

export default (props) => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' exact component={Home} />
        <Route path='/transaction' exact component={Transaction} />
        <Route component={NotFound} />
    </Switch>
);