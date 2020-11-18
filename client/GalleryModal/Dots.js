import React from 'react'
import styled from 'styled-components';

const Dot = styled.span`
      padding: 5px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${props => props.active ? 'black' : 'white'};
`;

const DotsStyle = styled.div`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
`;

const Dots = ({slides, activeIndex}) => {
    return (
        <DotsStyle>
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
            ))}
        </DotsStyle>
    )
}


export default Dots;