import { useState } from "react"
import Store from "./Store"

const StoreProvider = (props) => {

    const [totalItems, setTotalItems] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [token, setToken] = useState(null);

    const isLoggedIn = !!token;

    const handleToken = (token) => {
        setToken(token);
    }

    const addtocart = (music) => {
        setTotalItems(prev => (prev + 1));
        const isPresentIdx = cartItems.findIndex(item => item.title === music.title);
        const itemIdx = cartItems[isPresentIdx];
        let newMusicItems;
        if (itemIdx) {
            const newQuan = itemIdx.quantity + 1;
            const quan = +newQuan;
            const newmusic = { ...itemIdx, quantity: quan };
            newMusicItems = [...cartItems];
            newMusicItems[isPresentIdx] = newmusic;
            setCartItems(newMusicItems);
        } else {
            setCartItems(prev => {
                return ([...prev, { ...music, quantity: music.quantity + 1 }]);
            })
        }
    }

    const ItemRemover = (title, quantity) => {
        const updatedList = cartItems.filter(items => {
            return (items.title !== title);
        })
        setTotalItems(prev => {
            return (prev - quantity);
        })
        setCartItems(updatedList);
    }

    const storeVal = {
        islogin: isLoggedIn,
        cartItems: cartItems,
        totalItem: totalItems,
        totalPrice: 500,
        login: handleToken,
        addtocart: addtocart,
        removeItem: ItemRemover
    }


    return (
        <Store.Provider value={storeVal}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider;