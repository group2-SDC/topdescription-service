import Axios from 'axios';
import React from 'react';
import DescriptionHalf from './DescriptionHalf.jsx';
import CardComponent from './StyledComponents/CardComponentStyle.js';
import Slider from '../GalleryModal/Slider.js';
import PrimaryContainer from './StyledComponents/PrimaryContainer.js';
import ImageGallery from '../GalleryModal/ImageGallery.jsx';
import BigSlider from '../GalleryModal/BigSlider.js';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            showSlider: false,
            showImageGallery: false,
	    index: window.location.pathname.slice(1,3)
        };

        this.showModalGallery = this.showModalGallery.bind(this);
        this.showFunc = this.showFunc.bind(this);
    };

    componentDidMount(){
	
	    Axios.get(`/api/listings/${this.state.index}/carousel`)
            .then((response) => {
                this.setState({
                    data: response.data[0]
                });
            })
            .catch((error) => {
                console.log(error)
            });
    };


    showModalGallery(change) {
        this.setState({
            showImageGallery: change
        })
    };

    showFunc(change) {
        console.log('fromSliderFuncApp ==> ', this.state)

        this.setState({
            showSlider: change
        })
    };


    render() {
        if (!this.state.data) {
            return (
                <div>Loading</div>
            )
        } else if (this.state.data && !this.state.showImageGallery && !this.state.showSlider) {
            return (
                <PrimaryContainer>
                    <CardComponent>
                        <DescriptionHalf data={this.state.data} />
                    </CardComponent>
                    <Slider data={this.state.data.gallery} showModalGallery={this.showModalGallery} showFunc={this.showFunc} />
                </PrimaryContainer>

            );
        } else if (this.state.showImageGallery) {
            return (
                <ImageGallery data={this.state.data.gallery} showModalGallery={this.showModalGallery} />
            );
        } else if(this.state.data && this.state.showSlider){
            return (            
                <BigSlider data={this.state.data.gallery} showModalGallery={this.showModalGallery} showFunc={this.showFunc}/>
            )
        }
    };
};

export default App;
