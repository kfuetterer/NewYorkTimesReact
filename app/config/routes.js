import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from "../components/Main";

const routes = (
    <BrowserRouter> 
        <Route path="/" component={Main} />
    </BrowserRouter>
);

export default routes;