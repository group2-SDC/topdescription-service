import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import IconInfoTxtStyle from './StyledComponents/IconInfoTxtStyle';
import IconInfoStyle from './StyledComponents/IconInfoStyle.js';
import ToursAndExpBoxStyle from './StyledComponents/ToursAndExpBoxStyle.js';
import ToursInnerStyle from './StyledComponents/ToursInnerStyle.js';
import ButtonStyle from './StyledComponents/ButtonStyle';

class ToursAndExperiences extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return(
            <ToursAndExpBoxStyle>
                <IconInfoStyle>
                    
                    <IconInfoTxtStyle>
                    <FontAwesomeIcon icon={faUsers} />
                        <strong> {this.props.data.numberOfTours} Tours & Experiences </strong>
                            <ToursInnerStyle>
                                Cultural Tours, Walking Tours, Biking Tours & more
                            </ToursInnerStyle>
                            <ButtonStyle onClick={() => {console.log('hello')}}>
                                See available tour options
                            </ButtonStyle>
                    </IconInfoTxtStyle>
                </IconInfoStyle>
            </ToursAndExpBoxStyle>
        )
    }
}

export default ToursAndExperiences;