import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Naythar.scss'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getWallPaperQuery = gql`
    {
        wallpapers{
            name
            imageurl
        }
    }
`

class Carosual extends React.Component{

    imagerender(){
        var data = this.props.data;
        if(data.loading){
            console.log(data.loading);
        }else{
            return data.wallpapers.map(pic=>{
                    return(
                        <div className="imageCarouselcontainer">
                            <img src={pic.imageurl} />
                            <p className="legend">{pic.name}</p>
                        </div>
                    )
                })
            
        }
    }

    render(){
        return(
            <div className="carosualimagecontainer">
                <Carousel autoPlay interval={3000} infiniteLoop centerMode emulateTouch>
                    {this.imagerender()}
                </Carousel>
            </div>
        )
    }
}
export default graphql(getWallPaperQuery)(Carosual)