import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/scss/navbar.scss';
import './assets/scss/styles.scss';
import Navbar from './components/items/Navbar';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';

const App = () => <>
    <Navbar />
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/checkout" component={Checkout}  />
    </Switch>
</>


export default App;