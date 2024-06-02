import React from "react";

const carItem = [
    {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        author: "Design, Pattern",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        thumbnailImage: "", // Consider adding a valid image URL here
      },
      {
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        author: "Design, Pattern",
        shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        thumbnailImage: "", // Consider adding a valid image URL here
      },
    ];    

const HomeBlog = () => {
    return(
        <>
        <section className="home-blog">
            <div className="container">
                <div className="blog-head">
                    <h3 className="heading">Recent posts</h3>
                    <a href="" className="more-link">View all</a>
                </div>
                <div className="blog-carousel">

                </div>
            </div>
        </section>
        </>
    )
}
export default HomeBlog;