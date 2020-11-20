import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import ReviewsSection from './StyledComponents/ReviewsSectionStyle.js'
import TitleName from './StyledComponents/TitleStyle.js'
import ReviewsComponent from './StyledComponents/ReviewsComponentStyle.js'
import ToursComponent from './StyledComponents/ToursComponentStyle.js'
import Category from './StyledComponents/CategoryComponentStyle.js'
import HeartandEmailStyle from './StyledComponents/HeartandEmailStyle.js'
class NameReviewTours extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            toursCount: 0
        }
    }

    render() {
        if(!this.props.data) {
            return(
                <h1>Loading</h1>
            );
        } else {
            return(
                <div>
                    <TitleName>
                        {this.props.data.name}
                    </TitleName>
                    <ReviewsSection> 
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faCoffee} />
                        <ReviewsComponent>
                          {this.props.data.reviews} Reviews
                        </ReviewsComponent>
                    </ReviewsSection>
                    <ToursComponent>
                        #1 of {this.props.data.numberOfTours} things to do in {this.props.data.name}
                    <HeartandEmailStyle>
                        <FontAwesomeIcon icon={faHeart} style={{paddingLeft: "85px"}}/>
                        <FontAwesomeIcon icon={faMailBulk} />
                    </HeartandEmailStyle>
                        
                    </ToursComponent>

                    <Category>
                        Farmers Markets
                    </Category>    
                </div>
            );
        };
    };
};

export default NameReviewTours;