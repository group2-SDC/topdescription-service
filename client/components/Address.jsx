import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import IconInfoTxtStyle from './StyledComponents/IconInfoTxtStyle';
import IconInfoStyle from './StyledComponents/IconInfoStyle.js';
import { faPennyArcade } from '@fortawesome/free-brands-svg-icons';

class Address extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        {console.log(this.props.data)}
        return(
            <div>
                <IconInfoStyle>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <IconInfoTxtStyle>
                        <strong>Address: </strong> {this.props.data.address}
                    </IconInfoTxtStyle>  
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    
                </IconInfoStyle>
                <IconInfoStyle>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    <IconInfoTxtStyle>
                        Improve This Listing
                    </IconInfoTxtStyle> 
                </IconInfoStyle>

                
            </div>
            


        )
    }
}

export default Address;
