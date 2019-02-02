import React from 'react';
import './Naythar.scss';
import SingleLineGridList from './SingleLineGridList';
import TitleHeader from './TitleHeader';

class OtherProductLayer extends React.Component{
    render(){
        return(
            <div className="othercontainer">
                <TitleHeader title="Recommand" />
                <SingleLineGridList header = "Other" data="Data"/>
            </div>
        )
    }
}
export default OtherProductLayer;