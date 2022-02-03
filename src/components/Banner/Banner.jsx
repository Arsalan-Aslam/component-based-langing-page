import React from'react';
import banner from "../../images/bg-home.jpg";
import '../Banner/Banner.css';

const Banner = () => {
    return <>
        <div className="banner">
            <img src={banner} alt="Freeeze" />
        </div>
        </>;
};

export default Banner;