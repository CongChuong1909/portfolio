import "./hero.scss";
import {motion} from 'framer-motion'
const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 1
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }

}
const slideTextVariants = {
    initial:{
        x: 0
    },
    animate:{
        x: "-420%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 40,
        }
    }

}
function Hero(props) {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="text-container" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h1 variants={textVariants}>Hi!</motion.h1>
                    <motion.h1 variants={textVariants}>I'm <span>Chuong</span></motion.h1>
                    <motion.h1 variants={textVariants}>Web developer.</motion.h1>
                    <motion.div className="button" variants={textVariants}>
                        <motion.button variants={textVariants}><a href="/CV_LUONG CONG CHUONG.pdf" download>Download My CV</a></motion.button>
                        <motion.button className="contact" variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="" variants={textVariants} animate='scrollButton'/>
                </motion.div>
            </div>
            <motion.div className="slide-text-container" variants={slideTextVariants} initial='initial' animate='animate'>
               UI Designer for digital products.
            </motion.div>
            <div className="img-container">
                <img src="/1.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
