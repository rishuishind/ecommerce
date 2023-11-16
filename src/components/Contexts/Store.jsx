import { createContext } from "react";

const Store = createContext({
    islogin: false,
    cartItems: [],
    totalItem: 0,
    totalPrice: 0,
    login: (token) => { },
    addtocart: (title) => { },
    removeItem: (title) => { },
    logout: () => { },
})
export default Store;