import React from 'react';
import './Homepage.scss';
import HeaderNavigation from '../../commons/HeaderNavigation';

class Header extends React.Component{
    render(){
        return(
            <div class="homepageheadercontainer">
                <HeaderNavigation value={"home"}/>
            </div>
        )
    }
}
export default Header;