import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ReviewsSection from './StyledComponents/ReviewsSection.js'
import TitleName from './StyledComponents/TitleName.js'
import ReviewsComponent from './StyledComponents/ReviewsComponent.js'
import ToursComponent from './StyledComponents/ToursComponent.js'
import Category from './StyledComponents/Category.js'
import Overview from './Overview.jsx'
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
            )
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
                    </ToursComponent>
                    <Category>
                        Farmers Markets
                    </Category>
                    
                </div>
            )
        }
    }
}

export default NameReviewTours;