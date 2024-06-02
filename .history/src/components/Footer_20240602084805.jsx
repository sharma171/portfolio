import React from "react";

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