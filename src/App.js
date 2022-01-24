import React from 'react';
import { _routes } from './_routes';
import './assets/scss/_index.scss'
import Navbar from './components/items/Navbar';
import { Route, Switch } from 'react-router-dom';

const App = () => <>
    <Navbar />
    <Switch>
        {_routes.map(route => <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />)}
    </Switch>
</>


export default App;