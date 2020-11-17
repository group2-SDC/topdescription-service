import React from 'react';
import DescriptionStyle from './StyledComponents/DescriptionStyle.js'
import DescriptionTitleStyle from './StyledComponents/DescriptionTitleStyle.js'

const Overview = (props) => (
    
    <div>
        <DescriptionTitleStyle>
            Overview
        </DescriptionTitleStyle>
        <DescriptionStyle>
            <div>{props.data.overview}</div>
        </DescriptionStyle>

    </div>
)

export default Overview;