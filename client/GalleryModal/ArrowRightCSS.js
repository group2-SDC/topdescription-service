import styled from 'styled-components';

const ArrowRightStyle = styled.div`
    display: flex;
    position: absolute;
    top: 45%;
    right: 0px;
    height: 50px;
    width: 50px;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5%;
    cursor: pointer;
    align-items: center;
    z-index: 0;
    transition: transform ease-in 0.1s;
    &:hover {
    transform: scale(1.1);
    z-index: 6;
    }
    img {
    transform: translateX(-2px);
    &:focus {
        outline: 0;
        }
    }
`;

export default ArrowRightStyle;