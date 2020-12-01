import styled from 'styled-components';

const ToursComponent = styled.section`
    display: flexbox;
    margin-top: 12px;
    margin-bottom: 15px;
    font-size: 12px;
    font-family: Poppins;
    color: black;
    padding-left: 30px;
    padding-right: 30px;
    width: 200px;
    border: .5px solid gray;
    padding-bottom: 15px;

    border-radius: 4px;
    justify-content: center;
    margin-left: 20px;

    &:hover {
        background-color: whitesmoke;
    }
`;

export default ToursComponent;