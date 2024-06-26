import { useEffect, useRef } from "react";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Loading from "./components/Loading/Loading";

const App = () => {
    return (
            <main >
                <Loading/>
                <Cursor />
                <section id="Homepage">
                    <Navbar />
                    <Hero />
                </section>
                <section id="Services">
                    <Parallax type="services" />
                </section>
                <section>
                    <Services />
                </section>
                <section id="Portfolio">
                    <Parallax type="portfolio" />
                </section>
                <Portfolio />
                <section id="Contact">
                    <Contact />
                </section>
            </main>
    );
};

export default App;
