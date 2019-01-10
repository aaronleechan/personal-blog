import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/MainPage/Home';

const RouteLocation = () => {
    return(
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    );
};

export default RouteLocation;
