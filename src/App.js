import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/css/navbar.scss';
import './assets/css/grid.scss';
import Navbar from './components/items/Navbar';
import Carts from './components/pages/Carts';
import Home from './components/pages/Home';


const App = () => <>
    <Navbar />
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/carts" component={Carts} />
    </Switch>
</>


export default App;