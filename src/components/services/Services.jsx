import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        // x: -500,
        y: 300,
        opacity: 0,
    },
    animate: {
        // x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};
const title1Variants = {
    initial: {
        x: -300,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
const title2Variants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
function Services(props) {
    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"})
    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            animate = {isInView && "animate"}
            ref={ref}
        >
            <div className="text-container">
                <p>
                    I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </div>
            <motion.div className="title-container">
                <motion.div
                    className="title"
                    variants={title1Variants}
                    initial="initial"
                    whileInView="animate"
                >
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </motion.div>
                <motion.div
                    className="title"
                    variants={title2Variants}
                    initial="initial"
                    whileInView="animate"
                >
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </motion.div>
            </motion.div>
            <motion.div className="list-container" variants={variants}>
                <div
                    className="box"
                >
                    <div className="wrap">
                        <div className="svg"><svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg></div>
                        <h2>Front-end</h2>
                        <p>
                        I undertake the development of the user interface of a website, through the use of HTML, CSS and JS(ReactJS, NextJS) and UI library so that users can view and interact with the website. 
                        </p>
                    </div>
                    <button><a href="#portfolioID">Go</a></button>
                </div>
                <div
                    className="box"
                >
                    <div className="wrap">
                        <div className="svg">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <h2>Back-end</h2>
                        <p>
                        I have the ability to learn and support the backend team, participate in database building and system design analysis..
                        </p>
                    </div>
                    <button><a href="#portfolioID">Go</a></button>
                </div>
                <div
                    className="box"
                >
                    <div className="wrap">
                        <div className="svg">
                        <svg version="1.1" id="Uploaded to svgrepo.com" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="blueprint_een" d="M8,9H4v3h4V9z M7,11H5v-1h2V11z M8,13H4v3h4V13z M7,15H5v-1h2V15z M6,17c-1.657,0-3,1.343-3,3 s1.343,3,3,3s3-1.343,3-3S7.657,17,6,17z M6,22c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2s2,0.897,2,2C8,21.103,7.103,22,6,22z M21.646,11.646l0.707,0.707l-2,2l-0.707-0.707L21.646,11.646z M31,4h-1.586l-1.707-1.707c-0.391-0.391-1.023-0.391-1.414,0 L24.586,4H1C0.448,4,0,4.448,0,5v22c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V5C32,4.448,31.552,4,31,4z M16,14v4h4l8-8v13H11V9 h10L16,14z M17,14.707L19.293,17H17V14.707z M20.146,16.439l-2.586-2.586L27,4.414L29.586,7L20.146,16.439z M2,26V6h22l-2,2H10v16 h19V9l1-1v18H2z"></path> </g></svg>
                        </div>
                        <h2>Design</h2>
                        <p>
                        I'm willing to take on and be responsible for creating a stub version of a website (visual web design). After the editing and finishing process, the finished design will be transferred to the web developers.
                        </p>
                    </div>
                    <button><a href="#portfolioID">Go</a></button>
                </div>
                <div
                    className="box"
                >
                    <div className="wrap">
                        <div className="svg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 7H18.01M15 7H15.01M18 17H18.01M15 17H15.01M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <h2>Other skill</h2>
                        <p>
                        I try to improve myself with soft skills like communication skills, problem solving skills, leadership skills, time management, listening, critical thinking, teamwork,..
                        </p>
                    </div>
                    <button><a href="#portfolioID">Go</a></button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Services;
