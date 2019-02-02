import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';


class HeaderNavigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
        this.handleChange = this.handleChange.bind(this)
    }
    

    handleChange = (event,value)=>{
        this.props.history.push("/"+value);
        this.setState({value});
    }

    render(){
        const { value } = this.state;
        return(
            <BottomNavigation value={value} onChange={this.handleChange}>
                <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>}/>
                    <BottomNavigationAction label="Shopping" value="shopping" icon={<AddShoppingCartIcon/>}/>
                <BottomNavigationAction label="Developer" value="developer" icon={<DeveloperModeIcon/>}/>
            </BottomNavigation>
        )
    }
};
export default withRouter(HeaderNavigation);