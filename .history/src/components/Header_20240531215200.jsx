import React from "react";
import styles from "../app/globals.css";

const navLink = [
    {
        name: "Work",
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
                            <a key={index}>{item.name}</a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;