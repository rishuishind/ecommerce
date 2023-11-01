import Cart from "../Cart/Cart";


const Navibar = () => {
    return (
        <>
            <nav className='bg-black text-white flex list-none justify-between h-[5rem]'>
                <div>
                </div>
                <div className='flex gap-6 mt-3'>
                    <li className='hover:cursor-pointer'>Home</li>
                    <li className='hover:cursor-pointer'>Store</li>
                    <li className='hover:cursor-pointer'>About</li>
                </div>
                <div className='mr-8 mt-3 hover:cursor-pointer'>
                    <Cart />
                </div>
            </nav>
        </>
    )
};

export default Navibar;