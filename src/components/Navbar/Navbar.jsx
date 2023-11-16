import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import Store from "../Contexts/Store";


const Navibar = () => {

    const ctx = useContext(Store);

    return (
        <>
            <nav className='bg-black text-white flex list-none justify-between h-[5rem]'>
                <div>
                </div>
                <div className='flex gap-6 mt-3'>
                    <li className='hover:cursor-pointer'><NavLink className={({ isActive }) => isActive ? 'underline text-red-400' : undefined} to='/home'>Home</NavLink></li>

                    <li className='hover:cursor-pointer'>{<NavLink className={({ isActive }) => isActive ? 'underline text-red-400' : undefined} to={ctx.islogin ? '/store' : '/login'}>Store</NavLink>}</li>

                    <li className='hover:cursor-pointer'><NavLink className={({ isActive }) => isActive ? 'underline text-red-400' : undefined} to='/about'>About</NavLink></li>

                    <li className='hover:cursor-pointer'><NavLink className={({ isActive }) => isActive ? 'underline text-red-400' : undefined} to='/contact'>Contact Us</NavLink></li>

                    {!ctx.islogin && <li className='hover:cursor-pointer'><NavLink className={({ isActive }) => isActive ? 'underline text-red-400' : undefined} to='/login'>Login</NavLink></li>}

                </div>
                <div className='mr-8 mt-3 hover:cursor-pointer'>
                    <Cart />
                </div>
            </nav>
        </>
    )
};

export default Navibar;