import React from "react";

import "../Footer/Footer.css";

const Item = ( {title, image} ) => {
    return <>
        <div className="footer-item">
        <a href="#" className="product">
            <img src={image} alt="Products"/>
            <p>{title.toUpperCase()}</p>
        </a>
        </div>

    </>;
};

export default Item;