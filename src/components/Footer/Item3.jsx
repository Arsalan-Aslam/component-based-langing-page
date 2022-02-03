import React from "react";
import Img3 from "../../images/flavours.PNG";
import "../Footer/Footer.css";

const Item3 = () => {
    return <>
        <div className="footer-item">
        <a href="#">
            <img src={Img3} alt="Flavors"/>
            <p>Flavors</p>
        </a>
        </div>

    </>;
};

export default Item3;