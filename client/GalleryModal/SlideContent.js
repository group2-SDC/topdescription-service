import React, {useState} from 'react';
import styled from 'styled-components';

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 580px;
    display: flex;
    background: whitesmoke;
`;

export default SliderContent;

