import React from 'react';
import Button from '@material-ui/core/Button';

function WhiteButton(props){
    return(
        <div>
            <Button variant="contained" color="primary">{props.value}</Button>
        </div>
        
    )
}
export default WhiteButton;