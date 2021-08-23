type productType = {
    name: string;
    price: number;
    quantity: number;
}

interface addPoductActionInterface {
    type: string;
    payload: productType;
}

const addProductAction = (product: productType): addPoductActionInterface => {
    return {
        type: "add product",
        payload: product
    }
}

export default addProductAction;