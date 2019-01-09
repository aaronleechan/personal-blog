import React from 'react';
import App from './components/App'
import {Route,Switch} from 'react-router-dom';

const RouteLocation = () => {
    return(
        <Switch>
            <Route exact path="/" component={App}/>
            
        </Switch>
    );
};

export default RouteLocation;
