import React from "react";
// Imported footer Item component
import Item from "../Footer/Item"

// Imported Footer items images
import Img1 from "../../images/products.PNG";
import Img2 from "../../images/ourstory.PNG";
import Img3 from "../../images/flavours.PNG";
import Img4 from "../../images/location.PNG";

import "../Footer/Footer.css";

const Footer = () => {
    return <>
    <div className="footer">
        <div className="footer-menu">
            <Item title="Products" image={Img1}/>
            <Item title="Our Story" image={Img2} />
            <Item title="Flavors" image={Img3} />
            <Item title="Our Location" image={Img4} />
        </div>
    </div>
    </>;
};

export default Footer;