import React from "react";
import Img4 from "../../images/location.PNG";
import "../Footer/Footer.css";

const Item4 = () => {
    return <>
        <div className="footer-item">
        <a href="#">
            <img src={Img4} alt="Our Location"/>
            <p>Our Location</p>
        </a>
        </div>
    </>;
};

export default Item4;