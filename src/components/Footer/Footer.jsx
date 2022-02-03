import React from "react";
import Item1 from "../Footer/Item1";
import Item2 from "../Footer/Item2";
import Item3 from "../Footer/Item3";
import Item4 from "../Footer/Item4";

import "../Footer/Footer.css";

const Footer = () => {
    return <>
    <div className="footer">
        <div className="footer-menu">
            <Item1 />
            <Item2 />
            <Item3 />
            <Item4 />
        </div>
    </div>
    </>;
};

export default Footer;