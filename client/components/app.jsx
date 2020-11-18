import Axios from 'axios';
import React from 'react';
import DescriptionHalf from './DescriptionHalf.jsx';
import CardComponent from './StyledComponents/CardComponentStyle.js';
import Slider from '../GalleryModal/Slider.js';
// import Gallery from '../GalleryModal/GalleryHalf.jsx';
import PrimaryContainer from './StyledComponents/PrimaryContainer.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        Axios.get('/getData/1')
            .then((response) => {
                this.setState({
                    data: response.data[0]
                });
            })
            .catch((error) => {
                console.log(error)
            });
        };

    render() {
        if(!this.state.data) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <PrimaryContainer>
                    <CardComponent>
                        <DescriptionHalf data={this.state.data} />
                    </CardComponent>
                    <Slider data={this.state.data.gallery}/>
                    {/* <Gallery data={this.state.data} /> */}
                </PrimaryContainer>
                
            );
        };
    };
};

export default App;