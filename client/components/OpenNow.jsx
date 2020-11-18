import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import IconInfoTxtStyle from './StyledComponents/IconInfoTxtStyle';
import IconInfoStyle from './StyledComponents/IconInfoStyle.js';

class OpenNow extends React.Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return(
            
            <IconInfoStyle>
                <FontAwesomeIcon icon={faClock} />
                <IconInfoTxtStyle>
                    <strong>Open Now: </strong>{this.props.data.openNow}
                </IconInfoTxtStyle>
                <FontAwesomeIcon icon={faInfoCircle} />      
            </IconInfoStyle>
        )
    }
}

export default OpenNow;