import React from 'react';
import styled from 'styled-components';

const Slide = (props) => {

        if(!props) {
            return (
                <div>Loading!</div>
            )
        } else {
            return(
                <SlideStyle>
                    <img src={props.content} />
                </SlideStyle>
            )
        }
    }

const SlideStyle = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Slide;