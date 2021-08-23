import React, {FC} from "react";
import "./style.scss";

interface componentProps {
    name: string;
    price: number;
    quantity: number;
}

const IndividualProduct:FC<componentProps> = (props) => {

    return(
        <div className="individual-product">
            <h2 className="individual-product__name">{props.name}</h2>
            <p className="individual-product__price">{`$ ${props.price.toFixed(3)}`}</p>
            <p className="individual-product__quantity">{props.quantity}</p>
        </div>
    )
};

export default IndividualProduct;