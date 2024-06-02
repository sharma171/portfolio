import React from "react";
import Image from "next/image"
import styles from "../app/globals.css";

const navLink = [
    {
        name: "Work",
        link: "/"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Contact",
        link: "/contact"
    },
]

const Header = () => {
    return(
        <header>
            <nav className="nav">
                <a href="">
                    <Image
                    src="https://bditcenter.com/public/images/subcategory/logo/16460581542908.portfolio%20website.png"
                    alt="logo"
                    />
                </a>
                <div className="navMenu">
                    {navLink.map((item, index) => (
                        <a href={item.link} className="navLink" key={index}>{item.name}</a>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;