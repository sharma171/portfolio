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
                    <div className="det-row"></div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}