import React from 'react';
import './Naythar.scss';
import HeaderNavigation from '../../commons/HeaderNavigation';

class Header extends React.Component{
    render(){
        return(
            <div class="naytharheadercontainer">
                <HeaderNavigation  value={"shopping"}/>
            </div>
        )
    }
}
export default Header;