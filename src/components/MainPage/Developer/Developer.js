import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderNavigation } from '../../commons/index';
import Header from './Header';
import Footer from './Footer';


class Developer extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}
export default Developer