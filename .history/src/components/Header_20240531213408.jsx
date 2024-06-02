import React from "react";
import styles from "../app/globals.css";

const Header = () => {
    return(
        <header>
            <div className={styles.container}>
                <nav className={styles.nav}></nav>
            </div>
        </header>
    )
}

export default Header;