import redux from "redux";

//cada reducer tiene su propio state
type productType = {
    name: string;
    price: number;
    quantity: number;
}

interface cartReducerStateInterface {
    cart: productType[];
}

interface action extends redux.Action {
    type: string;
    payload: productType
}

const initialState: cartReducerStateInterface = {
    cart: []
}

const cartReducer = (state: cartReducerStateInterface = initialState, action: action): cartReducerStateInterface => {
    switch (action.type) {
        case "add product":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;




