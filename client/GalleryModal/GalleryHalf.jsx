import React from 'react';
import GalleryModal from '../components/StyledComponents/GalleryModal.js';
import NextandPrevious from '../components/StyledComponents/NextandPrevious.js';

class Gallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            currentImageIndx: 0
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
    };


    nextImage(){
        let length = this.props.data.gallery.length - 1;
        if(this.state.currentImageIndx < length){
            this.setState({
                currentImageIndx: this.state.currentImageIndx + 1
            });
        } else {
            this.setState({
                currentImageIndx: 0
            });
        };
    };

    previousImage(){
        if(this.state.currentImageIndx === 0){
            let length = this.props.data.gallery.length - 1
            this.setState({
                currentImageIndx: length
            });
        } else {
            this.setState({
                currentImageIndx: this.state.currentImageIndx - 1
            });
        };
    };


    showModal() {
        this.setState({
            modal: true
        });
    };

    hideModal() {
        this.setState({
            modal: false
        });
    };



    render() {
        if (!this.props.data.gallery) {
            return (
                <div>Loading</div>
            );
        } else {
            return (
                <GalleryModal>
                    <img src={this.props.data.gallery[this.state.currentImageIndx]} height="310px" width="360px" padding-left="10px"></img>
                    <NextandPrevious>
                        <button onClick={() => {this.previousImage()}}>Previous</button>
                    </NextandPrevious>
                    <NextandPrevious>
                        <button onClick={() => {this.nextImage()}}>Next</button>
                    </NextandPrevious>
            </GalleryModal>
                  
                
            );
        };
    };
};
export default Gallery;