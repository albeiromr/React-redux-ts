import React, {useState, useRef} from "react";
import { useDispatch,} from "react-redux";
import "./style.scss";
import addProductAction from "../../redux/actions/addProductAction";

type productType = {
    name: string;
    price: number;
    quantity: number;
}

const ProductForm = () => {

    const dispatch = useDispatch();

    const productForm = useRef<HTMLFormElement>(null);

    const [product, setProduct] = useState<productType>({
        name: "",
        price: 0,
        quantity: 0
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //
        dispatch(addProductAction(product));
        productForm.current?.reset();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="product-form" onSubmit={handleSubmit} ref={productForm}>
            <h1 className="product-form__title">Agrega un producto</h1>
            <div className="product-form__inputs-main-container">
                <div className="product-form__inputs-sub-container">
                    <label className="product-form__lable" htmlFor="name">Nombre</label>
                    <input 
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
