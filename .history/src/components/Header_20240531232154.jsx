import React from "react";
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
            <nav className={styles.nav}>
                <a href="/">
                    
                </a>
                <div className={styles.navMenu}>
                    {navLink.map((item, index) => (
                        <a href={item.link} className={styles.navLink} key={index}>{item.name}</a>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Header;