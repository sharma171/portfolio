import React from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function DetailPage() {
    return (
        <>
        <Header />
        <section className="detailed">
            <div className="container">
                <div className="detailed-inner">
                    <h1 className="main-heading">
                    Designing Dashboards with usability in mind
                    </h1>
                    <div className="det-row">
                        <span className="date">2020</span>
                        <span className="topic">Dashboard, User Experience Design</span>
                    </div>
                    <h2 className="subheading">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </h2>
                    <Image src={Featured1} />
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}