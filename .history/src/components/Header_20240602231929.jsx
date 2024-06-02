import React, {useState} from "react";
import "../app/globals.css";
import Hambmenu from "../../public/hamb-menu.svg"
import Image from "next/image";

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
                <a href="/">
                    
                </a>
                <div className="navMenu">
                    {navLink.map((item, index) => (
                        <a href={item.link} className="navLink" key={index}>{item.name}</a>
                    ))}
                </div>
                <div className="mob-menu">
                    <Image src={Hambmenu} alt="hambmenu" className="hambmenu" />
                    <div className="mob-list active">
                        {navLink.map((item, index) => (
                            <a href={item.link} className="moblink" key={index}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;