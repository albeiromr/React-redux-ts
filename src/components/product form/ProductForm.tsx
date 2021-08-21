import React from "react";
import "./style.scss";

const ProductForm = () => {

    return (
        <form className="product-form">
            <h1 className="product-form__title">Agrega un producto</h1>
            <div className="product-form__inputs-main-container">
                <div className="product-form__inputs-sub-container">
                    <label className="product-form__lable" htmlFor="name">Nombre</label>
                    <input 
                    className="product-form__input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="ingrese el nobre del producto"
                    />
                </div>
                <div className="product-form__inputs-sub-container">
                    <label className="product-form__lable" htmlFor="price">Precio</label>
                    <input 
                    className="product-form__input"
                    id="price"
                    type="text"
                    name="price"
                    placeholder="ingrese precio del producto"
                    />
                </div>
                <div className="product-form__inputs-sub-container">
                    <label className="product-form__lable" htmlFor="quantity">Cantidad</label>
                    <input 
                    className="product-form__input"
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="ingrese cantidad del producto"
                    />
                </div>
            </div>
            <button className="product-form__button" type="submit">Agregar al carrito</button>
        </form>
    )
}

export default ProductForm;
