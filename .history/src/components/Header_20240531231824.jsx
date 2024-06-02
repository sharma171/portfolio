import React from "react";
import Image from "next/image";
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
                    <Image
                        src={"/public/logo.png"}
                        alt="logo"
                        width={50}  // Adjust the width as needed
                        height={50}  // Adjust the height as needed
                    />
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
