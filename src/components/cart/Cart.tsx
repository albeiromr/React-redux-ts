import React from "react";
import "./style.scss"
import IndividualProduct from "../individual product/IndividualProduct";
import {useAppSelector} from "../../redux/hooks/hooks";


const Cart = () => {

    const {cart} = useAppSelector(state => state);

    return(
        <div className="cart">
            {cart.cart.map(product => <IndividualProduct />)}
        </div>
    )
}

export default Cart;