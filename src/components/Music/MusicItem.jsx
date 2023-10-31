import Button from 'react-bootstrap/Button';


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
            <h3>Music</h3>
            <ul className="d-flex">
                {productsArr.map(item => {
                    return (
                        <div className="mr-3">
                            <img src={item.imageUrl} alt="img" />
                            <li>{item.title} {item.price}</li>
                            <Button variant="primary">Add to Cart</Button>{' '}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
};
export default MusicItem;