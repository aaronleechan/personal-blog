import React from 'react';
import './Naythar.scss';
import HeaderNavigation from '../../commons/HeaderNavigation';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <div>
                <HeaderNavigation  value={"shopping"}/>
                <div className="naythartitleStyle">Welcome To ေနသာစတိုး</div>
            </div>
        )
    }
}
export default withRouter(Header);