import React from 'react';
import GalleryButtonStyle from './GalleryButtonStyle.js';

class GalleryButton extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <GalleryButtonStyle> 
                <span style={{fontSize: '8px', paddingLeft: '7px'}}> Photo Gallery </span>
            </GalleryButtonStyle>
        )
    }
}

export default GalleryButton;