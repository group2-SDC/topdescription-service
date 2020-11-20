
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class ImageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        if(!this.props.data){
            return(
                <div>Loading!</div>
            )
        } else if(this.props.data){

            return(
                <div>
                    <XStyle>
                        <FontAwesomeIcon icon={faTimes} onClick={() => this.props.showModalGallery(false)} style={{marginLeft: '98%'}}/>
                    </XStyle>
                    <div style={{display: 'flex', justifyContent: 'flex-start', zIndex: '100'}}>
                        <div style={{display: 'flex', justifyContent: 'flex-start', marginRight: '0'}}>
                            <SlideStyle2 >
                                    {this.props.data.map(image => 
                                        <img src={image} key={image} style={{width: '130px', height: '80px', margin: '10px 10px'}}/>
                                        )}
                            </SlideStyle2>
                        </div>
                    </div>
                </div>
                
            );
        };
    };
};

const XStyle = styled.div`
    background: whitesmoke;
    justify-content: right;
    cursor: pointer;
`;

const SlideStyle2 = styled.div` 
    display: flex; 
    flex-wrap: wrap; 
    position: relative;
`;

const Review = styled.div` 
    border: solid 2px black;
    height: 100px;
    width: 400px;
`;


export default ImageGallery