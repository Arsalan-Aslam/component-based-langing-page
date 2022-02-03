import React from "react";
import Img1 from "../../images/products.PNG";
import "../Footer/Footer.css";

const Item1 = () => {
    return <>
        <div className="footer-item">
        <a href="#" className="product">
            <img src={Img1} alt="Products"/>
            <p>PRODUCTS</p>
        </a>
        </div>

    </>;
};

export default Item1;