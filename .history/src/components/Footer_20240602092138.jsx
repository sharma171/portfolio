import React from "react";

import Facebook from "../../public/social/facebook.svg"
import Instagram from "../../public/social/instagram.svg"
import Twitter from "../../public/social/twitter.svg"
import Linkedin from "../../public/social/Linkedin.svg"

const Footer = () => {
    return(
        <>
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <div className="social-row">
                        <a href="" className="social">
                            <Image src={FacebookIcon} alt="icon" className="social-img" />
                        </a>
                        <a href="" className="social">
                            <Image src={InstagramIcon} alt="icon" className="social-img" />
                        </a>
                        <a href="" className="social">
                            <Image src={TwitterIcon} alt="icon" className="social-img" />
                        </a>
                        <a href="" className="social">
                            <Image src={linkedinIcon} alt="icon" className="social-img" />
                        </a>
                    </div>
                    <span className="copyright">
                        Copyright ©2020 All rights reserved 
                    </span>
                </div>
            </div>
        </footer>
        </>
    )
};
export default Footer;