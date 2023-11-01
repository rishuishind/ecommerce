import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Cart = () => {
    const [clicked, setClicked] = useState(false);
    const cartElements = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

            quantity: 2,

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

            quantity: 3,

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

            quantity: 1,

        }

    ]
    return (
        <div>
            {!clicked && <div onClick={() => setClicked(!clicked)} className='flex bg-red-400 rounded-md p-3'>
                <AiOutlineShoppingCart className='text-2xl' />:0
            </div>}
            {clicked &&
                <div className={`bg-blue-950 m-0 fixed top-5 max-w-[900px] p-20 h-[95%] min-h-[50vh] ${clicked ? 'right-[0]' : 'right-[-100%]'}`}>
                    <div className='flex justify-between gap-10'>
                        <p>Cart</p>
                        <p onClick={() => setClicked(!clicked)}>Close X</p>
                    </div>
                    <div>
                        <ul>
                            {cartElements.map(item =>
                                <div className='flex flex-col justify-between align-middle'>
                                    <div>
                                        Item:
                                        <img className=' w-10 h-10 rounded-lg' src={item.imageUrl} alt="img" />
                                        {item.title}
                                    </div>
                                    <div>
                                        Price:
                                        {item.price}
                                    </div>
                                    <div>
                                        Quantity:
                                        {item.quantity}
                                        <button className=' bg-red-600 text-white rounded-md p-2 ml-2'>Remove Item</button>
                                    </div>
                                </div>
                            )}
                        </ul>
                    </div>

                </div>
            }
        </div >
    );
};

export default Cart;