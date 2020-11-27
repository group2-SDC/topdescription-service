// import React, { useState } from 'react';
// import SliderContent from './SlideContent.js';
// import styled from 'styled-components';
// import Slide from './Slide.js';
// import Arrows from './Arrows.js';
// import ArrowLeftStyle from './ArrowLeftCSS';
// import ArrowRightStyle from './ArrowRightCSS';
// import DotsBS from './DotsBigSlider.js';
// import GalleryButtonStyle from './GalleryButtonStyle.js';
// import { faCamera, faTimes} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// const BigSlider = ({ data, showModalGallery, showFunc }) => {

//     const [state, setState] = useState({
//         activeIndex: 0,
//         translate: 0,
//         transition: 0.45
//       });
    
//       const { translate, transition, activeIndex } = state


//       const nextSlide = () => {
//         if (activeIndex === data.length - 1) {
//           return setState({
//             ...state,
//             translate: 0,
//             activeIndex: 0
//           });
//         };
    
//         setState({
//           ...state,
//           activeIndex: activeIndex + 1,
//           translate: (activeIndex + 1) * 385
//         });
//       };
    
//       const prevSlide = () => {
//         if (activeIndex === 0) {
//           return setState({
//             ...state,
//             translate: (data.length - 1) * 385,
//             activeIndex: data.length - 1
//           });
//         };

//         setState({
//             ...state,
//             activeIndex: activeIndex - 1,
//             translate: (activeIndex - 1) * 385
//           });
//         };


//     if (!data) {
//         return (
//             <div>
//                 Loading!!
//             </div>
//         );
//     } else if (data) {
//         return (
//             <ViewerBS>
//                 <XStyle2>
//                     <FontAwesomeIcon icon={faTimes} onClick={() => showFunc(false)} style={{color: 'black', marginLeft: '98%'}}/>
//                 </XStyle2>
//                 <SliderCSSBS>
//                     <SliderContent translate={translate} transition={transition}>
//                         {data.map(slide => (
//                             <Slide key={slide} content={slide} />
//                             ))}
//                     </SliderContent>
//                 </SliderCSSBS>
//                 <HoverButtonsBS>
//                     <ArrowRightStyle>
//                             <Arrows direction="right" handleClick={nextSlide}/>
//                     </ArrowRightStyle>

//                     <ArrowLeftStyle>
//                             <Arrows direction="left" handleClick={prevSlide} />
//                     </ArrowLeftStyle>

//                     <GalleryButtonStyle onClick={() => showModalGallery(true)} style={{top:'5%', background: 'white', color: 'black'}}>
//                         <FontAwesomeIcon icon={faCamera} style={{marginRight: '2px'}}/> Gallery
//                     </GalleryButtonStyle>

//                 </HoverButtonsBS>
//             </ViewerBS>
//         )
//     }
// }

// const XStyle2 = styled.div`
//     background: whitesmoke;
//     justify-content: right;
//     cursor: pointer;
// `;

// const HoverButtonsBS = styled.div`
//     z-index: 3;
//     &:hover{
//         z-index: 6
//     }
//     &:active{
//         z-index: 6
//     }

// `;

// const SliderCSSBS = styled.div`
//     position: relative;
//     top: 5%;
//     margin: 0 auto;
//     overflow: hidden;
//     width: 385px;
//     height: 385px;
//     z-index: 5;
//     &:hover {
//         z-index: 0;
//     }
// `;

// const ViewerBS = styled.div`
//     position: relative;
//     width: 385;
//     height: 425px;
//     z-index: 1;
//     background: black;
// `;


// export default BigSlider;

