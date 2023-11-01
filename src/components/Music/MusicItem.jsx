


const MusicItem = () => {
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
            <ul className='md:flex text-center justify-center'>
                {productsArr.map(item => {
                    return (
                        <div className="mr-3 mt-4 overflow-hidden">
                            {item.title}
                            <img className=' mt-3 mb-3 hover:scale-110  transform transition duration-500' src={item.imageUrl} alt="img" />
                            <div className='flex justify-between'>
                                Rs.{item.price}
                                <button className=' bg-blue-400 text-white font-bold rounded mr-2 mt-1 p-1'>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};
export default MusicItem;