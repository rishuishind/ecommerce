import { useContext } from "react";
import Store from "../Contexts/Store";



const MusicItem = () => {
    const ctx = useContext(Store);
    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]
    return (
        <div>
            <h3 className=' font-serif text-center text-3xl'>Music</h3>
            <ul className='md:grid grid-cols-2 w-96 mx-auto gap-6'>
                {productsArr.map(item => {
                    return (
                        <div>
                            {item.title}
                            <img className=' rounded-lg hover:scale-110  transform transition duration-500' src={item.imageUrl} alt="img" />
                            <div className='flex justify-start gap-10'>
                                Rs.{item.price}
                                <button onClick={ctx.addtocart} className=' bg-blue-400 text-white font-bold rounded mr-2 mt-1 p-1'>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};
export default MusicItem;