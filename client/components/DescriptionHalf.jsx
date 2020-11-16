import React from 'react';
import NameReviewTours from './NameReviewTours.jsx';
import CardComponent from './StyledComponents/CardComponent.js'
import Overview from './Overview.jsx'

class DestinationCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
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
                    <NameReviewTours data={this.props.data} />
                    <Overview data={this.props.data} />
                </div>
            )
        }
    }
}

export default DestinationCard;