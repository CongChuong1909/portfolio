import { useEffect } from 'react';
import './Loading.scss'
import { preLoaderAnim } from './Animation';

function Loading(props) {
    useEffect(()=>{ 
        preLoaderAnim(); 
    },[])
    return (
        <div className='preloader'>
            <div className="texts-container">
                <span>Developer,</span>
                <span>Developer,</span>
                <span>Developer,</span>
            </div>
        </div>
    );
}

export default Loading;











// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const sideOne = {
//   animate: {
//     opacity: 1,
//     scaleY: 1,
//     transformOrigin: "bottom"
//   },
//   initial: {
//     opacity: 0,
//     scaleY: 0,
//     transformOrigin: "bottom"
//   },
//   exit: {
//     opacity: 0,
//     scaleY: 0,
//     transformOrigin: "top"
//   }
// };

// const sideTwo = {
//   animate: {
//     opacity: 1,
//     scaleY: 1,
//     transformOrigin: "top"
//   },
//   initial: {
//     opacity: 0,
//     scaleY: 0,
//     transformOrigin: "top"
//   },
//   exit: {
//     opacity: 0,
//     scaleY: 0,
//     transformOrigin: "bottom"
//   }
// };

// const leftPanelText = {
//   initial: {
//     opacity: 0,
//     x: "-20px"
//   },
//   animate: {
//     opacity: 1,
//     x: 0
//   }
// };

// const rightPanelText = {
//   initial: {
//     opacity: 0,
//     x: "20px"
//   },
//   animate: {
//     opacity: 1,
//     x: 0
//   }
// };

// const textTransitionLoading = {
//   ease: "anticipate",
//   duration: 0.5,
//   delay: 0.5
// };

// const textTransitionExit = {
//   ease: "anticipate",
//   duration: 0.5
// };

// const loadingTransition = {
//   ease: "easeInOut",
//   duration: 0.5
// };

// export default function LoadingAnimation({ loading }) {
//   return (
//     <LoadingContainer>
//       <Side
//         animate={loading ? "animate" : "exit"}
//         initial="initial"
//         variants={sideOne}
//         transition={loadingTransition}
//       >
//         <motion.h1
//           variants={leftPanelText}
//           animate={loading ? "animate" : "initial"}
//           initial="initial"
//           transition={loading ? textTransitionLoading : textTransitionExit}
//         >
//           Tregrantha
//         </motion.h1>
//       </Side>
//       <Side
//         animate={loading ? "animate" : "exit"}
//         initial="initial"
//         variants={sideTwo}
//         transition={loadingTransition}
//       >
//         <motion.h3
//           variants={rightPanelText}
//           animate={loading ? "animate" : "initial"}
//           initial="initial"
//           transition={loading ? textTransitionLoading : textTransitionExit}
//         >
//           Buy, Rent, List and Sell Competitive Books at a Cheap Price!
//         </motion.h3>
//       </Side>
//     </LoadingContainer>
//   );
// }

// const LoadingContainer = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   display: flex;
//   pointer-events: none;
// `;

// const Side = styled(motion.div)`
//   width: 50vw;
//   height: 100vh;
//   background-color: #2a2d34;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #e9d2c0;
//   word-wrap: wrap;
//   h3 {
//     width: 20ch;
//   }
// `;
