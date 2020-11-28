import styled from 'styled-components';

const ToursComponent = styled.section`
    display: flexbox;
    justify-content: flex-start;
    font-size: 12px;
    font-family: Poppins;
    color: black;
    padding-left: 3px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export default ToursComponent;