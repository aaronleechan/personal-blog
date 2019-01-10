import React from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {exampleAction} from '../actions/actions'
import './App.scss';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <h1>This is App.js</h1>
                <p className="normalfont">Here is our property: { this.props.examplePropsOne }</p>
                <p className="materialfont">materialfont</p>
            </div>
        )
    }
}

// Like A Subscribe , everything update will be provided
const mapStateToProps = (state) =>{
    return{
        examplePropsOne: state.examplePropsOne,
        examplePropsTwo: state.examplePropsTwo,
    }
}

// Send msg to Actions --> Reducers --> Store --mapStateToProps--> Component
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({exampleAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);