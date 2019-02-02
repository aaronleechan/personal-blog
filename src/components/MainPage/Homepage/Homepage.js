import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderNavigation } from '../../commons/index';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import Header from './Header';
import HomepageFooter from './HomepageFooter';


class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                
                <HomepageFooter></HomepageFooter>
            </div>
            
        )
    }
}
export default Homepage