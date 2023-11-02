import { useState } from "react"
import Store from "./Store"

const StoreProvider = (props) => {
    const [totalItems, setTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const addtocart = (item) => {
        setTotalItems(prev => (prev + 1));
    }

    const storeVal = {
        cartItems: cartItems,
        totalItem: totalItems,
        totalPrice: 500,
        addtocart: addtocart
    }


    return (
        <Store.Provider value={storeVal}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider;