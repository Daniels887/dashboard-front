import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ListProducts from './pages/ListProducts';
import NewProduct from './pages/NewProduct'
import DetailProduct from './pages/DetailProduct';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/products" component={ListProducts} />
                <Route path="/new" component={NewProduct} />
                <Route path="/detail" component={DetailProduct} />
            </Switch>
        </BrowserRouter>
    )
}