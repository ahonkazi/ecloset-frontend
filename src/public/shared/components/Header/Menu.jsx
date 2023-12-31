import React, { useContext, useState } from 'react'
import style from './navbar.module.scss';
import './style.scss';
import LogoGreen from '../../assets/LogoGreen';
import { MdOutlineSupportAgent, MdSearch, MdShoppingCart } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineBell, AiOutlineHeart, AiOutlineMenu, AiOutlineNotification, AiOutlineUser } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import { GetSharedContext } from '../../context/Context';
import { GetGlobalContext } from '../../../../context/GlobalContext';
import { AnimatePresence, motion } from 'framer-motion';
// import
export const DesktopMenu = () => {
    const profileMenu = [
        { name: 'Profile', path: '/profile/index' },
        { name: 'My Cart', path: '/cart' },
        { name: 'WishList', path: '/profile/wishlist' },
        // { name: 'Login', path: '' },
    ]

    const context = useContext(GetSharedContext);
    const globalcontext = useContext(GetGlobalContext);
    const [profileDropdown, setProfileDropdown] = useState(false);
    return (
        <menu className={`flex ${style.HeaderPaddingDesktop} justify-between bg-GreenLight py-2 bg-opacity-30`}>
            <div className="flex items-center gap-4">
                <button onClick={() => context.SetDesktopSidebarStatus(!context.desktopSidebarStatus)} className='flex gap-2 items-center group py-1 pl-1 pr-4 rounded-3xl  bg-white'>
                    <span className='bg-GreenLight group-hover:bg-Green duration-300 text-white w-8 h-8 flex items-center justify-center text-xl rounded-full'><AiOutlineMenu /></span>
                    <span className='font-Poppins text-[15px] text-gray-500'>All Categories</span>
                </button>
                {
                    context.menu?.map(item =>
                        <NavLink to={item.path} className='px-4 DesktopMenuLink text-gray-700 rounded-3xl duration-300 hover:text-Green hover:bg-opacity-40 hover:bg-GreenLight py-2  font-Poppins text-[15px] tracking-wide font-medium'>{item.name}</NavLink>
                    )
                }
            </div>
            <div className="flex items-center gap-4">
                <div onMouseEnter={() => setProfileDropdown(true)} onMouseLeave={() => setProfileDropdown(false)} className="relative">
                    <Link to={'/profile/index'}>
                        <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full bg-white text-GreenLight'>
                            <AiOutlineUser className='text-xl' />
                        </button>

                    </Link>
                    <ul className={`bg-white ${profileDropdown ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-5 opacity-0 pointer-events-none'} duration-300 min-h-[100px] shadow-2 w-[200px] z-[50] absolute top-10  rounded right-0`}>
                        {
                            profileMenu.map(item =>
                                <li className='hover:bg-slate-100 border-b duration-200 '>
                                    <Link className='py-2 px-4 block text-gray-700' to={item.path}>{item.name}</Link>
                                </li>
                            )
                        }
                        <li className='hover:bg-slate-100 border-b duration-200 '>
                            <button onClick={() => { globalcontext.setLoginSidebarStatus(true); document.body.classList.add('overflow-hidden') }} className='py-2 px-4 block text-gray-700 w-full text-start'>Login</button>
                        </li>

                    </ul>
                    <div className={`bg-transparent h-[10px]  w-[200px] z-[20] absolute top-full  rounded right-0`}>
                    </div>

                </div>
                <button className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full bg-white text-GreenLight'>
                    <AiOutlineBell className='text-xl' />
                </button>
                <div className="flex items-center gap-2">

                    <button onClick={() => { globalcontext.setCartSideStatus(true); document.body.classList.add('overflow-hidden') }} className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-GreenLight'>
                        <MdShoppingCart className='text-xl' />
                    </button>

                    <span className='font-Ubuntu font-medium text-gray-600'><span>৳ </span>0.00</span>
                </div>
            </div>
        </menu>
    )
}

export const MobileMenu = () => {
    const [IsLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const globalcontext = useContext(GetGlobalContext)

    const navigate = useNavigate()
    const searchHandler = () => {
        window.scrollTo(0, 0);

        if (searchValue) {
            navigate('/search?q=' + searchValue);
            setSearchValue('');

        }

    }
    return (
        <menu className={`flex ${style.HeaderPaddingMobile} gap-2 justify-center bg-GreenLight py-2 bg-opacity-30`}>
            <form onSubmit={(e) => { e.preventDefault(); searchHandler() }} className="search-bar bg-white  flex justify-between rounded-3xl items-center w-full h-[40px] md:h-[44px] px-1">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className='w-full font-Ubuntu bg-transparent border-none outline-none pl-3  text-[15px] text-gray-400 font-normal' placeholder='Search for product..' />
                <button type='submit' className='shrink-0 w-[36px] hover:bg-GreenLight duration-200 text-2xl text-white h-[36px] bg-Green rounded-full flex items-center justify-center'>
                    <MdSearch className={`${IsLoading ? style.pulse : ''}`} />
                </button>
            </form>

            <div className="flex items-center gap-2">


                <button onClick={() => { globalcontext.setCartSideStatus(true); document.body.classList.add('overflow-hidden') }} className='w-9 h-9 flex items-center hover:shadow-xl duration-300 justify-center rounded-full text-white bg-GreenLight'>
                    <MdShoppingCart className='text-xl' />
                </button>

            </div>
        </menu>
    )
}