import React from "react";
import Img2 from "../../images/ourstory.PNG";
import "../Footer/Footer.css";

const FooterItem2 = () => {
    return <>
        <div className="footer-item">
        <a href="#">
            <img src={Img2} alt="Our Story"/>
            <p>OUR STORY</p>
        </a>
        </div>

    </>;
};

export default FooterItem2;