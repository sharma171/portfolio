import React from "react";
import Image from "image"
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
                <a href=""></a>
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