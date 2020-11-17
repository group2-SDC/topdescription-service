import styled from 'styled-components';

const ReviewsSection = styled.section`
    display: flexbox;
    justify-content: flex-start;
    font-size: 8px;
    padding-left: 2px;
    font-family: Poppins;
    color: green;

    &:hover {
        cursor: pointer;
        color: black;
        text-decoration: underline;
    }
`;

export default ReviewsSection;