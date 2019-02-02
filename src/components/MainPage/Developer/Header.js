import React from 'react';
import './Developer.scss';
import HeaderNavigation from '../../commons/HeaderNavigation';

class Header extends React.Component{
    render(){
        return(
            <div class="headercontainer">
                <HeaderNavigation  value={"developer"}/>
            </div>
        )
    }
}
export default Header;