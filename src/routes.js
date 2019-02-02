import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/MainPage/Homepage/Homepage';
import Developer from './components/MainPage/Developer/Developer';
import Shopping from './components/MainPage/Naythar/Naythar';

const RouteLocation = () => {
    return(
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/developer" component={Developer}/>
            <Route exact path="/shopping" component={Shopping}/>
        </Switch>
    );
};

export default RouteLocation;
