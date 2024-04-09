import { useRef } from "react"
import "./Portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
const items = [
    {
        id: 1,
        title: "Petfamily network",
        img: "/portfolio1.png",
        desc: `The site can function normally as a social networking site for people who love pets and want to exchange their pets with others.<br/> You can post, interact with articles, the user can create their pet profile and manage them like an electronic health book. In addition, the website has other features of doctors or clinics, features of website administrators`,
        demo: "https://petfamily.click",
        git:"https://github.com/CongChuong1909/petfamilyReup"

    },
    {
        id: 2,
        title: "Lofi music website",
        img: "/portfolio2.gif",
        desc: "A clone lofi.co website includes the basic functions of a music website. Users can manipulate and change some options such as changing the background video, porodomo timer, calculating study time, add sound...",
        demo: "https://congchuong-lofi.netlify.app/",
        git:"https://github.com/CongChuong1909/lofi"
    },
    {
        id: 3,
        title: "E-Commerce Website Bookshop",
        img: "/portfolio3.png",
        desc: "This is an e-commerce website where users can make purchases and choose coupons. Order information will be sent to the admin page.",
        demo: "https://bookshopchuong.netlify.app/",
        git:"https://github.com/CongChuong1909/book-shop"
    },
     {
        id: 4,
        title: "The Fit Club",
        img: "/portfolio4.png",
        desc: "A website with design interface and motion effects",
        demo: "https://congchuong1909.github.io/fit-coach/",
        git:"https://github.com/CongChuong1909/fit-coach"
    }
    
]

const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref
    }) 
    const y = useTransform(scrollYProgress, [0,1], [-300, 300])
    return(
        <section >
            <div className="container" >
                <div className="wrapper">
                    <div className="image" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="text-container" style={{y : y }}>
                        <h2>{item.title}</h2>
                        <p dangerouslySetInnerHTML={{__html: item.desc}}/>
                        <div className="button">
                            <button><a href={item.demo}  target="_blank">See Demo</a></button>
                            <button><a href={item.git} target="_blank">Github</a></button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio(props) {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]}) 
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })
    return (
        <div id="portfolioID" className="portfolio" ref={ref}>
            <div  className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progress-bar"></motion.div>
            </div>
            {items.map((item)=> <Single item = {item} key={item.id}/>)}
        </div>
    );
}

export default Portfolio;