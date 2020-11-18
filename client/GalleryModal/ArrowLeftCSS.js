import styled from 'styled-components';

const ArrowLeftStyle = styled.div`
    display: flex;
    position: absolute;
    z-index: 12px;
    top: 45%;
    left: 0px;
    height: 50px;
    width: 50px;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
    transform: scale(1.1);
    }
    img {
    transform: translateX(2px);
    &:focus {
        outline: 0;
        }
    }
`;

export default ArrowLeftStyle;