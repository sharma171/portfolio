"use client"
import React, {useState} from "react";
import "../app/globals.css";
import Hambmenu from "../../public/hamb-menu.svg"
import Image from "next/image";

const navLink = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Work",
        link: "/workcategory"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Detailed",
        link: "/detailed"
    },
]

const Header = () => {
    const [active, setActive] = useState(false);
    function clickHandle() {
        setActive(!active);
        console.log(active )
    }
    return(
        <header>
            <nav className="nav">
                <a href="/">
                    
                </a>
                <div className="navMenu">
                    {navLink.map((item, index) => (
                        <a href={item.link} className="navLink" onClick={() => handleItemClick(`${item.name}`)} key={index}>{item.name}</a>
                    ))}
                </div>
                <div className="mob-menu">
                    <Image src={Hambmenu} alt="hambmenu" className="hambmenu" onClick={clickHandle} />
                    <div className={`mob-list ${active ? "active" : ""}`}>
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
