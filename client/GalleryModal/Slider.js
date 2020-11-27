import React, { useState } from 'react';
import SliderContent from './SlideContent.js';
import styled from 'styled-components';
import Slide from './Slide.js';
import Arrows from './Arrows.js';
import ArrowLeftStyle from './ArrowLeftCSS';
import ArrowRightStyle from './ArrowRightCSS';
import Dots from './Dots.js';
import GalleryButtonStyle from './GalleryButtonStyle.js';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FullScreenButtonStyle from './FullScreenButton.js';
import BigSlider from './BigSlider.js';

const Slider = ({ data, showModalGallery, showFunc }) => {

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
      });
    
      const { translate, transition, activeIndex } = state

      const nextSlide = () => {
        if (activeIndex === data.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          });
        };
    
        setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * 385
        });
      };
    
      const prevSlide = () => {
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (data.length - 1) * 385,
            activeIndex: data.length - 1
          });
        };

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * 385
          });
        };

    if (!data) {
        return (
            <div>
                Loading!!
            </div>
        );
    } else if (data) {
        return (
            <Viewer>
                <SliderCSS>
                    <SliderContent translate={translate} transition={transition}>
                        {data.map(slide => (
                            <Slide key={slide} content={slide} style={{width: '385px', height: '340px'}}/>
                            ))}
                    </SliderContent>
                </SliderCSS>
                <HoverButtons>
                    <ArrowRightStyle>
                            <Arrows direction="right" handleClick={nextSlide} />
                    </ArrowRightStyle>

                    <ArrowLeftStyle>
                            <Arrows direction="left" handleClick={prevSlide} />
                    </ArrowLeftStyle>
                    
                    <Dots slides={data} activeIndex={activeIndex} />
                    
                    <GalleryButtonStyle onClick={() => showModalGallery(true)}>
                        <FontAwesomeIcon icon={faCamera} style={{marginRight: '2px'}}/> All Photos ({data.length})
                    </GalleryButtonStyle>

                    <FullScreenButtonStyle onClick={() => showFunc(true)}>
                            FullScreen
                    </FullScreenButtonStyle>
                </HoverButtons>
            </Viewer>
        )
    }
}



const HoverButtons = styled.div`
    z-index: 3;
    &:hover{
        z-index: 6
    }
    &:active{
        z-index: 6
    }

`;

const SliderCSS = styled.div`
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    width: 385px;
    height: 340px;
    z-index: 5;
    &:hover {
        z-index: 0;
    }
`;

const Viewer = styled.div`
    position: relative;
    width: 385px;
    height: 340px;
    z-index: 1;
`;


export default Slider;

