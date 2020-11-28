import styled from 'styled-components';

const ToursComponent = styled.section`
    display: flexbox;
    margin-top: 12px;
    font-size: 12px;
    font-family: Poppins;
    color: black;
    padding-left: 2px;
    width: 200px;
    border: .5px solid gray;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
    justify-content: center;

    &:hover {
        background-color: whitesmoke;
    }
`;

export default ToursComponent;