import styled from 'styled-components';

const ArrowRightStyle = styled.div`
    display: flex;
    position: absolute;
    z-index: 12px;
    top: 45%;
    right: 0px;
    height: 50px;
    width: 50px;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    border-radius: 5%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
    transform: scale(1.1);
    }
    img {
    transform: translateX(-2px);
    &:focus {
        outline: 0;
    }
    }
`;

export default ArrowRightStyle;