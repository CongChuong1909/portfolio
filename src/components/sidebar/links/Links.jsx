import React from 'react';
import {motion} from 'framer-motion'
const variants = {
    open:{
        transition:{
            straggerChildren:0.1
        }
    },
    closed:{
        transition:{
            straggerChildren: 0.05,
            straggerDirection: -1
        }
    },
}
const itemVariant = {
    open:{
        y : 0,
        opacity: 1,
    },
    closed:{
        y :100,
        opacity: 0,
    },
}
function Links(props) {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]
    return (
        <motion.div className='links' variants = {variants}>
            {items.map((item)=>(
                <motion.a href={`#${item}`} key={item} variants={itemVariant} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{item}</motion.a>
            ))}
        </motion.div>
    );
}

export default Links;