import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image: ''
        }
    }

    render() {
        if(!this.props.data.gallery){
            return(
                <div>Loading</div>
            )
        } else {
            return(
                <img src={this.props.data.gallery[0]} height="50%" width="60%" padding-left="10px"></img>
            )
        }
    };
};
export default Gallery;