import React from "react";
import "./style.scss"
import IndividualProduct from "../individual product/IndividualProduct";
import {useAppSelector} from "../../redux/hooks/hooks";


const Cart = () => {

    const {cart} = useAppSelector(state => state);

    return(
        <div className="cart">
            {cart.cart.map(product => <IndividualProduct 
            name={product.name}
            price={Number(product.price)}
            quantity={Number(product.quantity)}
            />)}
        </div>
    )
}

export default Cart;