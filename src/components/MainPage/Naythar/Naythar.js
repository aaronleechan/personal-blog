import React from 'react';
import Button from '@material-ui/core/Button';
import { HeaderNavigation } from '../../commons/index';
import NaytharHeader from './NaytharHeader';
import NaytharFooter from './NaytharFooter';
import OshinProductLayer from './OshinProductLayer';
import OtherProductLayer from './OtherProductLayer';
import {connect} from 'react-redux';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';




class Naythar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <NaytharHeader></NaytharHeader>
                <OshinProductLayer></OshinProductLayer>
                <NaytharFooter></NaytharFooter>
            </div>
        )
    }
}




export default Naythar;