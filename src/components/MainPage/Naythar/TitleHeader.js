import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle'
import './Naythar.scss';

class TitleHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="titlecontainer">
                <DialogTitle>{this.props.title}</DialogTitle>
            </div>
        )
    }
}
export default TitleHeader