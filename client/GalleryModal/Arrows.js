import React from 'react'
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Arrows = ({ direction, handleClick }) => (
    <div onClick={handleClick} >
        {direction === 'right' ? <FontAwesomeIcon icon={faArrowRight} /> : <FontAwesomeIcon icon={faArrowLeft} /> }    
    </div >
)


export default Arrows