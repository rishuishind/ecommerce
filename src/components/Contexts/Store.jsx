import { createContext } from "react";

const Store = createContext({
    cartItems: [],
    totalItem: 0,
    totalPrice: 0,
    addtocart: (item) => { },
})
export default Store;