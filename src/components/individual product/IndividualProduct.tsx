import React from "react";
import "./style.scss";

const IndividualProduct = () => {

    return(
        <div className="individual-product">
            <h2 className="individual-product__name">El nombre del producto</h2>
            <p className="individual-product__price">$ 67.800</p>
            <p className="individual-product__quantity">23</p>
        </div>
    )
};

export default IndividualProduct;