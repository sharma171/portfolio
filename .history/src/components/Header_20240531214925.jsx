import React from "react";
import styles from "../app/globals.css";

const navLink = [
    {
        name: "Home",
        Link: ""
    }
]

const Header = () => {
    return(
        <header>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <a href=""></a>
                    <div className={styles.navMenu}>
                        {navLink.map((index, item) => (
                            <a key={index}></a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;