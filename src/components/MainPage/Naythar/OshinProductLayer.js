import React from 'react';
import './Naythar.scss';
import SingleLineGridList from './SingleLineGridList';
import TitleHeader from './TitleHeader';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getOShinProductQuery = gql`
    {
        brand(id: "5c3d616c942e10279aed089c"){
        name:
        products{
            name
            price
            imageurl
        }
        }
    }
`

class OshinProductLayer extends React.Component{
    render(){
        return(
            <div className="oshincontainer">
                <TitleHeader title="O SHIN"/>
                <SingleLineGridList header = "O SHIN" data={this.props.data}/>
            </div>
        )
    }
}
export default graphql(getOShinProductQuery)(OshinProductLayer);