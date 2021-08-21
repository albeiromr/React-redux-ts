import React from "react";
import "./style.scss";
import Cart from "../components/cart/Cart";
import ProductForm from "../components/product form/ProductForm";

const MainContainer = () => {

    return (
        <main className="main-container">
            <ProductForm />
            <Cart />
        </main>
    )
}

export default MainContainer;