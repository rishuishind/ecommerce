import { useState } from "react"
import Store from "./Store"

const StoreProvider = (props) => {

    const initialToken = localStorage.getItem('idToken');

    const num = +1;
    const [totalItems, setTotalItems] = useState(num);
    const [cartItems, setCartItems] = useState([]);
    const [token, setToken] = useState(initialToken);

    console.log('total items', totalItems);

    const isLoggedIn = !!token;
    let apiUrl;
    if (isLoggedIn) {
        const email = localStorage.getItem('email');
        const res_1 = email.split('@')[0];
        const res_2 = email.split('@')[1];
        const res_3 = res_2.split('.')[0];
        const res_4 = res_2.split('.')[1];
        const final = res_1 + res_3 + res_4;
        apiUrl = `https://crudcrud.com/api/e38c47632de04ce8a528b5782a2cbb1f/cart${final}`;
    }



    const handleToken = (token) => {
        setToken(token);
    }

    const addtocart = (music) => {

        setTotalItems(prev => (prev + 1));
        localStorage.setItem('quantity', totalItems);

        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((cartItems) => {
                const existingItem = cartItems.find((cartItem) => cartItem.title === music.title);
                console.log('existingItem is: ', existingItem);
                if (existingItem) {
                    console.log('inside existingItem');
                    const updatedQuan = +(existingItem.quantity + 1);

                    fetch(`${apiUrl}/${existingItem._id}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            title: music.title,
                            price: music.price,
                            imageUrl: music.imageUrl,
                            quantity: updatedQuan
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                } else {
                    console.log('inside else ', existingItem);
                    fetch(apiUrl, {
                        method: 'POST',
                        body: JSON.stringify({
                            title: music.title,
                            price: music.price,
                            imageUrl: music.imageUrl,
                            quantity: 1
                        }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                }
            });


    }

    const handleLogout = () => {
        setToken(null);
        localStorage.clear();
        setTotalItems(0);
    }

    const ItemRemover = (title, quantity, id) => {
        const updatedList = cartItems.filter(items => {
            return (items.title !== title);
        })
        setTotalItems(prev => {
            return (prev - quantity);
        })
        setCartItems(updatedList);
        fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    }

    const handleAddedCartItems = async () => {
        let fetchedItems = await fetch(apiUrl)
        fetchedItems = await fetchedItems.json();
        setCartItems(fetchedItems);
        console.log('cartItems are: ', cartItems);
    }

    const storeVal = {
        islogin: isLoggedIn,
        cartItems: cartItems,
        totalItem: totalItems,
        totalPrice: 500,
        login: handleToken,
        addtocart: addtocart,
        removeItem: ItemRemover,
        logout: handleLogout,
        addedCart: handleAddedCartItems
    }


    return (
        <Store.Provider value={storeVal}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider;