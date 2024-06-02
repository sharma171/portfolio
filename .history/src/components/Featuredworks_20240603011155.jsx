import React from "react";
import Image from "next/image"

import ThumbImg from "../../public/work/work1.jpg"

const FeaturedWorks = () => {
    const workData = [
        {
            thumb:"../../public/work/work1.jpg",
            head: "Designing Dashboards",
            date: "2020",
            topic: "Dashboard",
            info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
        {
            thumb:"../../public/work/work1.jpg",
            head: "Designing Dashboards",
            date: "2020",
            topic: "Dashboard",
            info: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]
    return(
        <>
        <div className="workcards">
            <div className="card-item">
                <div className="card-thumb">
                    <Image src={ThumbImg} alt="thumbnail" className="thumb-img" />
                </div>
                <div className="card-info">
                    <h3 className="heading">Designing Dashboards</h3>
                    <div className="info-row">
                        <span className="date">2020</span>
                        <span className="topic">Dashboard</span>
                    </div>
                    <p className="info-para">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div className="card-item">
                <div className="card-thumb">
                    <Image src={ThumbImg} alt="thumbnail" className="thumb-img" />
                </div>
                <div className="card-info">
                    <h3 className="heading">Designing Dashboards</h3>
                    <div className="info-row">
                        <span className="date">2020</span>
                        <span className="topic">Dashboard</span>
                    </div>
                    <p className="info-para">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default FeaturedWorks;