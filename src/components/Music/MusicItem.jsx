import { useContext } from "react";
import Store from "../Contexts/Store";
import { Link } from "react-router-dom";



const MusicItem = () => {
    const ctx = useContext(Store);
    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 0

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 0

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 0
        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            quantity: 0
        }

    ]

    const handleCart = (item) => {
        ctx.addtocart(item);

        const email = localStorage.getItem('email');
        const res_1 = email.split('@')[0];
        const res_2 = email.split('@')[1];
        const res_3 = res_2.split('.')[0];
        const res_4 = res_2.split('.')[1];
        const final = res_1 + res_3 + res_4;
        console.log('result is', final);

        fetch(`https://crudcrud.com/api/545d3faa4fc0467bab002ab2a586ef9e/cart${final}`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Authentication Failed');
            }
        }).then((data) => {
            console.log('success');
            console.log(data);
        }).catch(err => alert(err));
    }

    return (
        <div>
            <h3 className=' font-serif text-center text-3xl'>Music</h3>
            <ul className='md:grid grid-cols-2 w-96 mx-auto gap-6'>
                {productsArr.map(item => {
                    return (

                        <div>
                            {item.title}
                            <Link to={`/store/${item.title}`}>
                                <img className=' rounded-lg hover:scale-110  transform transition duration-500' src={item.imageUrl} alt="img" />
                            </Link>
                            <div className='flex justify-start gap-10'>
                                Rs.{item.price}
                                <button onClick={() => handleCart(item)} className=' bg-blue-400 text-white font-bold rounded mr-2 mt-1 p-1'>Add to cart</button>
                            </div>
                        </div>

                    )
                })}
            </ul>
        </div>
    )
};
export default MusicItem;