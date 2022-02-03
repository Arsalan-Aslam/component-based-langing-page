import React from "react";
import Product from '../../images/yogurt.jpg';
import '../NewProduct/NewProduct.css';

const NewProduct = () => {
    return <>
        <div className="new-product">
            <div className="text-col">
                <h2 style={{color:"#7a6666"}}>NEW PRODUCT</h2>
                <h1 style={{color:"#cb3362"}}>The Twist of Healthy Yogurt</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ipsa qui perferendis quos
                    exercitationem explicabo quas deserunt vel aut placeat, perspiciatis similique iusto dignissimos,
                    suscipit laudantium, praesentium cupiditate illo tenetur.</p>
            </div>
            <img src={Product} alt="Yogurt" />
        </div>
    </>;
};

export default NewProduct;