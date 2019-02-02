import React from 'react';
import Typography from '@material-ui/core/Typography'
import './Naythar.scss';
import Grid from '@material-ui/core/Grid';

class Footer extends React.Component{
    render(){
        return(
            <div className="naytharfootercontainer">
                <Grid container spacing={12} className="naytharfontstylecontainer">
                    <Grid item xs={6}>
                        <p>NAY THAR TRADING</p>
                        <p>ေနသာ ေရာင္း၀ဃ္ ေရး </p>
                        <p>O-Shin ဆပ္ ျပာ ဆီ ကိုဃ္ စား လွဃ္</p>
                        <p>No(48), 32 Street Between (72x73) Street,</p>
                        <p>ChanAyeTharZan Township, Mandalay</p>
                        <p>02-32363-64393, 09-200-4678</p>  
                    </Grid>
                    <Grid item xs={6}>
                        <p>Opening Hour</p>
                        <p>Monday - Friday: 7:00 AM - 5:00 PM </p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Footer;