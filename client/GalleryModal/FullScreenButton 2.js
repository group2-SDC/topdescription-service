import styled from 'styled-components';


const FullScreenButtonStyle = styled.button`
display: flex;
font-size: 7px;
position: absolute;
top: 45%;
right: 45%;
height: 40px;
width: 60px;
padding: 3px;
justify-content: center;
background: rgba(0, 0, 0, 0.3);
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

export default FullScreenButtonStyle;