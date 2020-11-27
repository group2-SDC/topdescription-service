import styled from 'styled-components';


const GalleryButtonStyle = styled.button`
display: flex;
font-size: 7px;
position: absolute;
top: 90%;
right: 74%;
height: 20px;
width: 80px;
padding: 3px;
justify-content: center;
background: rgba(0, 0, 0, 0.7);
color: white;
border-radius: 15%;
cursor: pointer;
align-items: center;
z-index: 0;
transition: transform ease-in 0.1s;
&:hover {
transform: scale(1.01);
z-index: 6;

}
img {
transform: translateX(-2px);
&:focus {
    outline: 0;
       }
    }
`;;

export default GalleryButtonStyle;