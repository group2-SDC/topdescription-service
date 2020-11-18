import React, { useState } from 'react';
import SliderContent from './SlideContent.js';
import styled from 'styled-components';
import Slide from './Slide.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Arrows from './Arrows.js';
import ArrowLeftStyle from './ArrowLeftCSS';
import ArrowRightStyle from './ArrowRightCSS';
import Dots from './Dots.js'


const Slider = ({ data }) => {

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
      })
    
      const { translate, transition, activeIndex } = state
    
      const nextSlide = () => {
          console.log(data.length);
        if (activeIndex === data.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * 385
        })
      }
    
      const prevSlide = () => {
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (data.length - 1) * 385,
            activeIndex: data.length - 1
          })
        }
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * 385
          })
    }

    if (!data) {
        return (
            <div>
                Loading!!
            </div>
        )
    } else if (data) {
        return (
            <Viewer>
                <SliderCSS>
                    <SliderContent translate={translate} transition={transition}>

                        {data.map(slide => (
                            <Slide key={slide} content={slide} />
                            ))}

                    </SliderContent>

                </SliderCSS>

                <ArrowRightStyle>
                        <Arrows direction="right" handleClick={nextSlide} />
                </ArrowRightStyle>
                <ArrowLeftStyle>
                        <Arrows direction="left" handleClick={prevSlide} />
                </ArrowLeftStyle>
                
                <Dots slides={data} activeIndex={activeIndex} />
        
            </Viewer>
        )
    }
}

const SliderCSS = styled.div`
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    width: 385px;
    height: 340px;
`;

const Viewer = styled.div`
    position: relative;
    z-index: 10;
    width: 385px;
    height: 340px;
`;


export default Slider;

