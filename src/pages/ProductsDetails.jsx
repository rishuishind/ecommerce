import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const param = useParams();
    return (
        <section className='border border-black'>
            <h1 className='font-bold text-center text-2xl mt-4'>This is the product details page</h1>
            <p className='text-center'>This page/routes belongs to <p className='font-bold inline'>{param.productTitle}</p> route</p>
            <p className='text-xl text-center'>We haven't added any details yet, but we will add it soon so please stay in touch!!</p>
        </section>
    )
};

export default ProductDetails;