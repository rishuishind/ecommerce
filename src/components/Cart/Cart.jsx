import { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Store from '../Contexts/Store';

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
    const ctx = useContext(Store);
    return (
        <div>
            {!clicked && <div onClick={() => setClicked(!clicked)} className='flex bg-red-400 rounded-md p-3'>
                <AiOutlineShoppingCart className='text-2xl' />{ctx.totalItem}
            </div>}
            {clicked &&
                <div className={`bg-blue-950 m-0 fixed z-1 top-5 max-w-[900px] p-20 h-[95%] min-h-[50vh] ${clicked ? 'right-[0]' : 'right-[-100%]'}`}>
                    <div className='flex justify-between gap-10'>
                        <p className='text-3xl'>Cart</p>
                        <p onClick={() => setClicked(!clicked)}>Close X</p>
                    </div>
                    <div>
                        <ul className='grid grid-cols-3'>
                            {cartElements.map(item =>
                                <>
                                    <div>
                                        <span className=' font-bold text-2xl'>Item:</span>
                                        <img className=' w-10 h-10 rounded-lg' src={item.imageUrl} alt="img" />
                                        {item.title}
                                    </div>
                                    <div>
                                        <span className='text-2xl font-bold'>Price:</span>
                                        {item.price}
                                    </div>
                                    <div>
                                        Quantity:
                                        {item.quantity}
                                        <button className=' bg-red-600 text-white rounded-md p-2 ml-2'>Remove Item</button>
                                    </div>
                                </>
                            )}
                        </ul>
                    </div>

                </div>
            }
        </div >
    );
};

export default Cart;