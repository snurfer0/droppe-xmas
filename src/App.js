import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/_index.scss';
import Navbar from './components/items/Navbar';
import { _routes } from './utils/_routes';

const App = () => <>
    <BrowserRouter>
        <Navbar />
        <Switch>
            {_routes.map(route => <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />)}
        </Switch>
    </BrowserRouter>
</>


export default App;