import React from 'react';
import NameReviewTours from './NameReviewTours.jsx';
import Overview from './Overview.jsx';
import OpenNow from './OpenNow.jsx';
import SuggestedDuration  from './SuggestedDuration.jsx';
import Address from './Address.jsx'
import ToursAndExperiences from  './ToursAndExperiences.jsx'

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
            {console.log(this.props.data.openNow)}
            return(
                <div>
                    <NameReviewTours data={this.props.data} />
                    <Overview data={this.props.data} />
                    <OpenNow data={this.props.data} />
                    <SuggestedDuration data={this.props.data} />
                    <Address data={this.props.data} />
                    <ToursAndExperiences data={this.props.data} />
                </div>
            )
        }
    }
}

export default DestinationCard;