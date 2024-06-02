import React from "react";
import "./page.css";

const Hero = () => {
    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="hero-lhs">
                    <div className="hero-cta">
                        <h1 className="main-head">
                        Hi, I am John,<br></br>Creative Technologist
                        </h1>
                        <p className="sub-head">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="cta-button">Download Resume</button>
                    </div>
                </div>
                <div className="hero-rhs">

                </div>
            </div>
        </section>
        </>
    )
}
export default Hero