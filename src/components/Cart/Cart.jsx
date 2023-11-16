import { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Store from '../Contexts/Store';

const Cart = () => {
    const [clicked, setClicked] = useState(false);
    const ctx = useContext(Store);

    const handleCartClick = () => {
        ctx.addedCart();
    }

    return (
        <div>
            {!clicked && <div onClick={() => setClicked(!clicked)} className='flex bg-red-400 rounded-md p-3'>
                <AiOutlineShoppingCart onClick={handleCartClick} className='text-2xl' />{localStorage.getItem('quantity')}
            </div>}
            {clicked &&
                <div className={`bg-blue-950 m-0 fixed z-1 top-5 max-w-[900px] p-20 h-[95%] min-h-[50vh] ${clicked ? 'right-[0]' : 'right-[-100%]'}`}>
                    <div className='flex justify-between gap-10'>
                        <p className='text-3xl'>Cart</p>
                        <p onClick={() => setClicked(!clicked)}>Close X</p>
                    </div>
                    <div>
                        <ul className='grid grid-cols-3'>
                            {ctx.cartItems.map(item =>
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
                                        <button onClick={() => ctx.removeItem(item.title, item.quantity, item._id)} className=' bg-red-600 text-white rounded-md p-2 ml-2'>Remove Item</button>
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