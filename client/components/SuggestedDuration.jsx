import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import IconInfoTxtStyle from './StyledComponents/IconInfoTxtStyle';
import IconInfoStyle from './StyledComponents/IconInfoStyle.js';

class SuggestedDuration extends React.Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return(
            <IconInfoStyle>
                <FontAwesomeIcon icon={faClock} />
                <IconInfoTxtStyle>
                    <strong>Suggested Duration: </strong> More than {this.props.data.suggestedDuration} hours
                </IconInfoTxtStyle>      
            </IconInfoStyle>
        )
    }
}

export default SuggestedDuration;