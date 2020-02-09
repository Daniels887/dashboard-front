import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ListProducts from './pages/ListProducts';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/products" component={ListProducts} />
            </Switch>
        </BrowserRouter>
    )
}