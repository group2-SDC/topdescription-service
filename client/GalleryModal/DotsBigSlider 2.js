import React from 'react'
import styled from 'styled-components';

const DotBS = styled.span`
      padding: 2px;
      margin-right: 5px;
      cursor: pointer;
      z-index: 0;
      border-radius: 50%;
      background: ${props => props.active ? 'black' : 'white'};
      &:hover{
          z-index: 6;
      }
`;

const DotsStyleBS = styled.div`
      position: absolute;
      bottom: 25px;
      width: 100%;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        z-index: 6;
    }
`;

const DotsBS = ({slides, activeIndex}) => {
    return (
        <DotsStyleBS>
            {slides.map((slide, i) => (
            <DotBS key={slide} active={activeIndex === i} />
            ))}
        </DotsStyleBS>
    )
}


export default DotsBS;