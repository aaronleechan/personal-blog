import React from 'react';
import './Naythar.scss';
import SingleLineGridList from './SingleLineGridList';
import TitleHeader from './TitleHeader';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAllProductQuery = gql`
    {
        brand(id: "5c5741c711bd870762e2106d"){
        name:
        products{
            name
            price
            imageurl
        }
        }
    }
`

class OtherProductLayer extends React.Component{
    render(){
        return(
            <div className="othercontainer">
                <SingleLineGridList header = "Available" data={this.props.data}/>
            </div>
        )
    }
}
export default graphql(getAllProductQuery)(OtherProductLayer);