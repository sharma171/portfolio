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
  return (
    <section className="home-blog">
      <div className="container">
        <div className="blog-head">
          <h3 className="heading">Recent posts</h3>
          <a href="" className="more-link">View all</a>
        </div>
        <div className="blog-carousel">
          {carItem.map((item, index) => (
            <Link key={index} className={`blog-item ${index}`}>
              <div className="blog-item-head">
                <h3 className="head">{item.title}</h3>
              </div>
              <div className="blog-info">
                <span className="date">{item.date}</span>
                <div className="divline"></div>
                <span className="author">{item.author}</span>
              </div>
              <div className="blog-para">
                <p className="para">{item.shortDescription}</p>
              </div>
              {item.thumbnailImage && (
                <div className="blog-image">
                  <img src={item.thumbnailImage} alt={item.title} />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
